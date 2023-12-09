/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../../../common";
import type {
  FunctionsRequest,
  FunctionsRequestInterface,
} from "../../../../../../../../../@chainlink/contracts/src/v0.8/functions/dev/v1_0_0/libraries/FunctionsRequest";

const _abi = [
  {
    inputs: [],
    name: "EmptyArgs",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySecrets",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptySource",
    type: "error",
  },
  {
    inputs: [],
    name: "NoInlineSecrets",
    type: "error",
  },
  {
    inputs: [],
    name: "REQUEST_DATA_VERSION",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60bc61004d600b8282823980515f1a607314610041577f4e487b71000000000000000000000000000000000000000000000000000000005f525f60045260245ffd5b305f52607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106032575f3560e01c80635d641dfc146036575b5f80fd5b603c6050565b60405160479190606f565b60405180910390f35b600181565b5f61ffff82169050919050565b6069816055565b82525050565b5f60208201905060805f8301846062565b9291505056fea264697066735822122003178cba73d053eca84c8217da64c2bc586498d9bf892fc40ad0a1af5b108dd064736f6c63430008140033";

type FunctionsRequestConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FunctionsRequestConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FunctionsRequest__factory extends ContractFactory {
  constructor(...args: FunctionsRequestConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<FunctionsRequest> {
    return super.deploy(overrides || {}) as Promise<FunctionsRequest>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): FunctionsRequest {
    return super.attach(address) as FunctionsRequest;
  }
  override connect(signer: Signer): FunctionsRequest__factory {
    return super.connect(signer) as FunctionsRequest__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FunctionsRequestInterface {
    return new utils.Interface(_abi) as FunctionsRequestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FunctionsRequest {
    return new Contract(address, _abi, signerOrProvider) as FunctionsRequest;
  }
}
