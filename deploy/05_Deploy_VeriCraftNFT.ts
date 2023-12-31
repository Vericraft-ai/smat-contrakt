import { DeployFunction } from "hardhat-deploy/types"
import { network } from "hardhat"
import {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
} from "../helper-hardhat-config"
import { verify } from "../helper-functions"

const deployFunction: DeployFunction = async ({ getNamedAccounts, deployments, getChainId }) => {
    const { deploy, log } = deployments

    const { deployer } = await getNamedAccounts()
    const chainId: number | undefined = network.config.chainId
    if (!chainId) return

    let ethUsdPriceFeedAddress: string | undefined

    if (chainId === 31337) {
        const EthUsdAggregator = await deployments.get("MockV3Aggregator")
        ethUsdPriceFeedAddress = EthUsdAggregator.address
    } else {
        ethUsdPriceFeedAddress = networkConfig[chainId].ethUsdPriceFeed
    }

    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    // Default one below is ETH/USD contract on Sepolia
    const waitBlockConfirmations: number = developmentChains.includes(network.name)
        ? 1
        : VERIFICATION_BLOCK_CONFIRMATIONS
    log(`----------------------------------------------------`)
    const priceConsumerV3 = await deploy("PriceConsumerV3", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true,
        waitConfirmations: waitBlockConfirmations,
    })

    // Verify the deployment
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("Verifying...")
        await verify(priceConsumerV3.address, [ethUsdPriceFeedAddress])
    }

    log("Run Price Feed contract with command:")
    const networkName = network.name == "hardhat" ? "localhost" : network.name
    log(
        `yarn hardhat read-price-feed --contract ${priceConsumerV3.address} --network ${networkName}`
    )
    log("----------------------------------------------------")
}

export default deployFunction
deployFunction.tags = [`all`, `keepers`]

// export default deployFunction
// // deployFunction.tags = [`all`, `keepers`]
// async function main() {
//     // Grab the contract factory
//     const MyNFT = await ethers.getContractFactory("MyNFT");

//     // Start deployment, returning a promise that resolves to a contract object
//     const myNFT = await MyNFT.deploy(); // Instance of the contract
//     console.log("Contract deployed to address:", myNFT.target);
//  }

//  main()
//    .then(() => process.exit(0))
//    .catch(error => {
//      console.error(error);
//      process.exit(1);
//    });
