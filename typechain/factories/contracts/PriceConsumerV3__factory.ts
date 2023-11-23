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
  "0x60a060405234801561001057600080fd5b50604051610491380380610491833981810160405281019061003291906100cf565b8073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff1681525050506100fc565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009c82610071565b9050919050565b6100ac81610091565b81146100b757600080fd5b50565b6000815190506100c9816100a3565b92915050565b6000602082840312156100e5576100e461006c565b5b60006100f3848285016100ba565b91505092915050565b60805161037461011d600039600081816082015261012801526103746000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638e15f4731461003b5780639e87a5cd14610059575b600080fd5b610043610077565b6040516100509190610165565b60405180910390f35b610061610124565b60405161006e91906101ff565b60405180910390f35b6000806000806000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa1580156100eb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061010f91906102c3565b94509450945094509450839550505050505090565b60007f0000000000000000000000000000000000000000000000000000000000000000905090565b6000819050919050565b61015f8161014c565b82525050565b600060208201905061017a6000830184610156565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006101c56101c06101bb84610180565b6101a0565b610180565b9050919050565b60006101d7826101aa565b9050919050565b60006101e9826101cc565b9050919050565b6101f9816101de565b82525050565b600060208201905061021460008301846101f0565b92915050565b600080fd5b600069ffffffffffffffffffff82169050919050565b61023e8161021f565b811461024957600080fd5b50565b60008151905061025b81610235565b92915050565b61026a8161014c565b811461027557600080fd5b50565b60008151905061028781610261565b92915050565b6000819050919050565b6102a08161028d565b81146102ab57600080fd5b50565b6000815190506102bd81610297565b92915050565b600080600080600060a086880312156102df576102de61021a565b5b60006102ed8882890161024c565b95505060206102fe88828901610278565b945050604061030f888289016102ae565b9350506060610320888289016102ae565b92505060806103318882890161024c565b915050929550929590935056fea264697066735822122035d44b4ecd7ccbb8d447be561977bdb046af7dd1657475aaee16d94e756b683e64736f6c63430008130033";

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
