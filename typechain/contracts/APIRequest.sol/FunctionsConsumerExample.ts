/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface FunctionsConsumerExampleInterface extends utils.Interface {
  functions: {
    "acceptOwnership()": FunctionFragment;
    "handleOracleFulfillment(bytes32,bytes,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "s_lastError()": FunctionFragment;
    "s_lastRequestId()": FunctionFragment;
    "s_lastResponse()": FunctionFragment;
    "sendRequest(string,bytes,uint8,uint64,string[],bytes[],uint64,uint32,bytes32)": FunctionFragment;
    "sendRequestCBOR(bytes,uint64,uint32,bytes32)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOwnership"
      | "handleOracleFulfillment"
      | "owner"
      | "s_lastError"
      | "s_lastRequestId"
      | "s_lastResponse"
      | "sendRequest"
      | "sendRequestCBOR"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "handleOracleFulfillment",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "s_lastError",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_lastRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_lastResponse",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "sendRequest",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "sendRequestCBOR",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "handleOracleFulfillment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "s_lastError",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_lastRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_lastResponse",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendRequestCBOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferRequested(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RequestFulfilled(bytes32)": EventFragment;
    "RequestSent(bytes32)": EventFragment;
    "Response(bytes32,bytes,bytes)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RequestSent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Response"): EventFragment;
}

export interface OwnershipTransferRequestedEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferRequestedEvent = TypedEvent<
  [string, string],
  OwnershipTransferRequestedEventObject
>;

export type OwnershipTransferRequestedEventFilter =
  TypedEventFilter<OwnershipTransferRequestedEvent>;

export interface OwnershipTransferredEventObject {
  from: string;
  to: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface RequestFulfilledEventObject {
  id: string;
}
export type RequestFulfilledEvent = TypedEvent<
  [string],
  RequestFulfilledEventObject
>;

export type RequestFulfilledEventFilter =
  TypedEventFilter<RequestFulfilledEvent>;

export interface RequestSentEventObject {
  id: string;
}
export type RequestSentEvent = TypedEvent<[string], RequestSentEventObject>;

export type RequestSentEventFilter = TypedEventFilter<RequestSentEvent>;

export interface ResponseEventObject {
  requestId: string;
  response: string;
  err: string;
}
export type ResponseEvent = TypedEvent<
  [string, string, string],
  ResponseEventObject
>;

export type ResponseEventFilter = TypedEventFilter<ResponseEvent>;

export interface FunctionsConsumerExample extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: FunctionsConsumerExampleInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    s_lastError(overrides?: CallOverrides): Promise<[string]>;

    s_lastRequestId(overrides?: CallOverrides): Promise<[string]>;

    s_lastResponse(overrides?: CallOverrides): Promise<[string]>;

    sendRequest(
      source: PromiseOrValue<string>,
      encryptedSecretsUrls: PromiseOrValue<BytesLike>,
      donHostedSecretsSlotID: PromiseOrValue<BigNumberish>,
      donHostedSecretsVersion: PromiseOrValue<BigNumberish>,
      args: PromiseOrValue<string>[],
      bytesArgs: PromiseOrValue<BytesLike>[],
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      donID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    sendRequestCBOR(
      request: PromiseOrValue<BytesLike>,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      donID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  handleOracleFulfillment(
    requestId: PromiseOrValue<BytesLike>,
    response: PromiseOrValue<BytesLike>,
    err: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  s_lastError(overrides?: CallOverrides): Promise<string>;

  s_lastRequestId(overrides?: CallOverrides): Promise<string>;

  s_lastResponse(overrides?: CallOverrides): Promise<string>;

  sendRequest(
    source: PromiseOrValue<string>,
    encryptedSecretsUrls: PromiseOrValue<BytesLike>,
    donHostedSecretsSlotID: PromiseOrValue<BigNumberish>,
    donHostedSecretsVersion: PromiseOrValue<BigNumberish>,
    args: PromiseOrValue<string>[],
    bytesArgs: PromiseOrValue<BytesLike>[],
    subscriptionId: PromiseOrValue<BigNumberish>,
    gasLimit: PromiseOrValue<BigNumberish>,
    donID: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  sendRequestCBOR(
    request: PromiseOrValue<BytesLike>,
    subscriptionId: PromiseOrValue<BigNumberish>,
    gasLimit: PromiseOrValue<BigNumberish>,
    donID: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    to: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    s_lastError(overrides?: CallOverrides): Promise<string>;

    s_lastRequestId(overrides?: CallOverrides): Promise<string>;

    s_lastResponse(overrides?: CallOverrides): Promise<string>;

    sendRequest(
      source: PromiseOrValue<string>,
      encryptedSecretsUrls: PromiseOrValue<BytesLike>,
      donHostedSecretsSlotID: PromiseOrValue<BigNumberish>,
      donHostedSecretsVersion: PromiseOrValue<BigNumberish>,
      args: PromiseOrValue<string>[],
      bytesArgs: PromiseOrValue<BytesLike>[],
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      donID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    sendRequestCBOR(
      request: PromiseOrValue<BytesLike>,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      donID: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferRequested(address,address)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferRequestedEventFilter;
    OwnershipTransferRequested(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferRequestedEventFilter;

    "OwnershipTransferred(address,address)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "RequestFulfilled(bytes32)"(
      id?: PromiseOrValue<BytesLike> | null
    ): RequestFulfilledEventFilter;
    RequestFulfilled(
      id?: PromiseOrValue<BytesLike> | null
    ): RequestFulfilledEventFilter;

    "RequestSent(bytes32)"(
      id?: PromiseOrValue<BytesLike> | null
    ): RequestSentEventFilter;
    RequestSent(id?: PromiseOrValue<BytesLike> | null): RequestSentEventFilter;

    "Response(bytes32,bytes,bytes)"(
      requestId?: PromiseOrValue<BytesLike> | null,
      response?: null,
      err?: null
    ): ResponseEventFilter;
    Response(
      requestId?: PromiseOrValue<BytesLike> | null,
      response?: null,
      err?: null
    ): ResponseEventFilter;
  };

  estimateGas: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    s_lastError(overrides?: CallOverrides): Promise<BigNumber>;

    s_lastRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    s_lastResponse(overrides?: CallOverrides): Promise<BigNumber>;

    sendRequest(
      source: PromiseOrValue<string>,
      encryptedSecretsUrls: PromiseOrValue<BytesLike>,
      donHostedSecretsSlotID: PromiseOrValue<BigNumberish>,
      donHostedSecretsVersion: PromiseOrValue<BigNumberish>,
      args: PromiseOrValue<string>[],
      bytesArgs: PromiseOrValue<BytesLike>[],
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      donID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    sendRequestCBOR(
      request: PromiseOrValue<BytesLike>,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      donID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    handleOracleFulfillment(
      requestId: PromiseOrValue<BytesLike>,
      response: PromiseOrValue<BytesLike>,
      err: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    s_lastError(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    s_lastRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    s_lastResponse(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sendRequest(
      source: PromiseOrValue<string>,
      encryptedSecretsUrls: PromiseOrValue<BytesLike>,
      donHostedSecretsSlotID: PromiseOrValue<BigNumberish>,
      donHostedSecretsVersion: PromiseOrValue<BigNumberish>,
      args: PromiseOrValue<string>[],
      bytesArgs: PromiseOrValue<BytesLike>[],
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      donID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    sendRequestCBOR(
      request: PromiseOrValue<BytesLike>,
      subscriptionId: PromiseOrValue<BigNumberish>,
      gasLimit: PromiseOrValue<BigNumberish>,
      donID: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      to: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
