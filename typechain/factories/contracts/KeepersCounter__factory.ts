/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  KeepersCounter,
  KeepersCounterInterface,
} from "../../contracts/KeepersCounter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "updateInterval",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "counter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "interval",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeStamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161075c38038061075c83398181016040528101906100329190610089565b80608081815250504260018190555060008081905550506100b6565b600080fd5b6000819050919050565b61006681610053565b811461007157600080fd5b50565b6000815190506100838161005d565b92915050565b60006020828403121561009f5761009e61004e565b5b60006100ad84828501610074565b91505092915050565b6080516106846100d86000396000818161019301526101ca01526106846000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633f3b3b271461005c5780634585e33b1461007a57806361bc221a146100965780636e04ff0d146100b4578063947a36fb146100e5575b600080fd5b610064610103565b6040516100719190610205565b60405180910390f35b610094600480360381019061008f9190610299565b610109565b005b61009e610187565b6040516100ab9190610205565b60405180910390f35b6100ce60048036038101906100c99190610427565b61018d565b6040516100dc92919061050a565b60405180910390f35b6100ed6101c8565b6040516100fa9190610205565b60405180910390f35b60015481565b60006101236040518060200160405280600081525061018d565b50905080610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610597565b60405180910390fd5b42600181905550600160005461017c91906105e6565b600081905550505050565b60005481565b600060607f0000000000000000000000000000000000000000000000000000000000000000600154426101c0919061061a565b119150915091565b7f000000000000000000000000000000000000000000000000000000000000000081565b6000819050919050565b6101ff816101ec565b82525050565b600060208201905061021a60008301846101f6565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261025957610258610234565b5b8235905067ffffffffffffffff81111561027657610275610239565b5b6020830191508360018202830111156102925761029161023e565b5b9250929050565b600080602083850312156102b0576102af61022a565b5b600083013567ffffffffffffffff8111156102ce576102cd61022f565b5b6102da85828601610243565b92509250509250929050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610334826102eb565b810181811067ffffffffffffffff82111715610353576103526102fc565b5b80604052505050565b6000610366610220565b9050610372828261032b565b919050565b600067ffffffffffffffff821115610392576103916102fc565b5b61039b826102eb565b9050602081019050919050565b82818337600083830152505050565b60006103ca6103c584610377565b61035c565b9050828152602081018484840111156103e6576103e56102e6565b5b6103f18482856103a8565b509392505050565b600082601f83011261040e5761040d610234565b5b813561041e8482602086016103b7565b91505092915050565b60006020828403121561043d5761043c61022a565b5b600082013567ffffffffffffffff81111561045b5761045a61022f565b5b610467848285016103f9565b91505092915050565b60008115159050919050565b61048581610470565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156104c55780820151818401526020810190506104aa565b60008484015250505050565b60006104dc8261048b565b6104e68185610496565b93506104f68185602086016104a7565b6104ff816102eb565b840191505092915050565b600060408201905061051f600083018561047c565b818103602083015261053181846104d1565b90509392505050565b600082825260208201905092915050565b7f54696d6520696e74657276616c206e6f74206d65740000000000000000000000600082015250565b600061058160158361053a565b915061058c8261054b565b602082019050919050565b600060208201905081810360008301526105b081610574565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006105f1826101ec565b91506105fc836101ec565b9250828201905080821115610614576106136105b7565b5b92915050565b6000610625826101ec565b9150610630836101ec565b9250828203905081811115610648576106476105b7565b5b9291505056fea2646970667358221220f50dcf637185df9da1755809269bf55f315c188ac508880ad3994aaf77a2bcbe64736f6c63430008130033";

type KeepersCounterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KeepersCounterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KeepersCounter__factory extends ContractFactory {
  constructor(...args: KeepersCounterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    updateInterval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<KeepersCounter> {
    return super.deploy(
      updateInterval,
      overrides || {}
    ) as Promise<KeepersCounter>;
  }
  override getDeployTransaction(
    updateInterval: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(updateInterval, overrides || {});
  }
  override attach(address: string): KeepersCounter {
    return super.attach(address) as KeepersCounter;
  }
  override connect(signer: Signer): KeepersCounter__factory {
    return super.connect(signer) as KeepersCounter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeepersCounterInterface {
    return new utils.Interface(_abi) as KeepersCounterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeepersCounter {
    return new Contract(address, _abi, signerOrProvider) as KeepersCounter;
  }
}
