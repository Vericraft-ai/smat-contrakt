/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  PriceConsumerV3,
  PriceConsumerV3Interface,
} from "../../contracts/PriceConsumerV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_priceFeed",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getLatestPrice",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPriceFeed",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561000f575f80fd5b50604051610466380380610466833981810160405281019061003191906100c9565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506100f4565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100988261006f565b9050919050565b6100a88161008e565b81146100b2575f80fd5b50565b5f815190506100c38161009f565b92915050565b5f602082840312156100de576100dd61006b565b5b5f6100eb848285016100b5565b91505092915050565b6080516103546101125f395f8181607c015261011f01526103545ff3fe608060405234801561000f575f80fd5b5060043610610034575f3560e01c80638e15f473146100385780639e87a5cd14610056575b5f80fd5b610040610074565b60405161004d919061015b565b60405180910390f35b61005e61011c565b60405161006b91906101ee565b60405180910390f35b5f805f805f807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156100e3573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061010791906102a7565b94509450945094509450839550505050505090565b5f7f0000000000000000000000000000000000000000000000000000000000000000905090565b5f819050919050565b61015581610143565b82525050565b5f60208201905061016e5f83018461014c565b92915050565b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f819050919050565b5f6101b66101b16101ac84610174565b610193565b610174565b9050919050565b5f6101c78261019c565b9050919050565b5f6101d8826101bd565b9050919050565b6101e8816101ce565b82525050565b5f6020820190506102015f8301846101df565b92915050565b5f80fd5b5f69ffffffffffffffffffff82169050919050565b6102298161020b565b8114610233575f80fd5b50565b5f8151905061024481610220565b92915050565b61025381610143565b811461025d575f80fd5b50565b5f8151905061026e8161024a565b92915050565b5f819050919050565b61028681610274565b8114610290575f80fd5b50565b5f815190506102a18161027d565b92915050565b5f805f805f60a086880312156102c0576102bf610207565b5b5f6102cd88828901610236565b95505060206102de88828901610260565b94505060406102ef88828901610293565b935050606061030088828901610293565b925050608061031188828901610236565b915050929550929590935056fea26469706673582212201cd5c8c8c77c3f014ac3f11c711ba7d76217525b2e13485cb250d8fbec6bdfa064736f6c63430008140033";

type PriceConsumerV3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PriceConsumerV3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PriceConsumerV3__factory extends ContractFactory {
  constructor(...args: PriceConsumerV3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _priceFeed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PriceConsumerV3> {
    return super.deploy(
      _priceFeed,
      overrides || {}
    ) as Promise<PriceConsumerV3>;
  }
  override getDeployTransaction(
    _priceFeed: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_priceFeed, overrides || {});
  }
  override attach(address: string): PriceConsumerV3 {
    return super.attach(address) as PriceConsumerV3;
  }
  override connect(signer: Signer): PriceConsumerV3__factory {
    return super.connect(signer) as PriceConsumerV3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PriceConsumerV3Interface {
    return new utils.Interface(_abi) as PriceConsumerV3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PriceConsumerV3 {
    return new Contract(address, _abi, signerOrProvider) as PriceConsumerV3;
  }
}
