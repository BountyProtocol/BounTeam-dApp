/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
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
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace DataTypes {
  export type InputDecisionStruct = { ruleId: BigNumberish; decision: boolean };

  export type InputDecisionStructOutput = [BigNumber, boolean] & {
    ruleId: BigNumber;
    decision: boolean;
  };
}

export interface IClaimInterface extends utils.Interface {
  contractName: "IClaim";
  functions: {
    "ruleRefAdd(address,uint256)": FunctionFragment;
    "stageCancel(string)": FunctionFragment;
    "stageDecision((uint256,bool)[],string)": FunctionFragment;
    "stageFile()": FunctionFragment;
    "stageWaitForDecision()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ruleRefAdd",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "stageCancel", values: [string]): string;
  encodeFunctionData(
    functionFragment: "stageDecision",
    values: [DataTypes.InputDecisionStruct[], string]
  ): string;
  encodeFunctionData(functionFragment: "stageFile", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stageWaitForDecision",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "ruleRefAdd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stageCancel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stageDecision",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stageFile", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "stageWaitForDecision",
    data: BytesLike
  ): Result;

  events: {
    "RuleAdded(address,uint256)": EventFragment;
    "RuleConfirmed(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RuleAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RuleConfirmed"): EventFragment;
}

export type RuleAddedEvent = TypedEvent<
  [string, BigNumber],
  { game: string; ruleId: BigNumber }
>;

export type RuleAddedEventFilter = TypedEventFilter<RuleAddedEvent>;

export type RuleConfirmedEvent = TypedEvent<[BigNumber], { ruleId: BigNumber }>;

export type RuleConfirmedEventFilter = TypedEventFilter<RuleConfirmedEvent>;

export interface IClaim extends BaseContract {
  contractName: "IClaim";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IClaimInterface;

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
    ruleRefAdd(
      game_: string,
      ruleId_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stageCancel(
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stageDecision(
      verdict: DataTypes.InputDecisionStruct[],
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stageFile(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stageWaitForDecision(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ruleRefAdd(
    game_: string,
    ruleId_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stageCancel(
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stageDecision(
    verdict: DataTypes.InputDecisionStruct[],
    uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stageFile(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stageWaitForDecision(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ruleRefAdd(
      game_: string,
      ruleId_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stageCancel(uri: string, overrides?: CallOverrides): Promise<void>;

    stageDecision(
      verdict: DataTypes.InputDecisionStruct[],
      uri: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stageFile(overrides?: CallOverrides): Promise<void>;

    stageWaitForDecision(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "RuleAdded(address,uint256)"(
      game?: null,
      ruleId?: null
    ): RuleAddedEventFilter;
    RuleAdded(game?: null, ruleId?: null): RuleAddedEventFilter;

    "RuleConfirmed(uint256)"(ruleId?: null): RuleConfirmedEventFilter;
    RuleConfirmed(ruleId?: null): RuleConfirmedEventFilter;
  };

  estimateGas: {
    ruleRefAdd(
      game_: string,
      ruleId_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stageCancel(
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stageDecision(
      verdict: DataTypes.InputDecisionStruct[],
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stageFile(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stageWaitForDecision(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ruleRefAdd(
      game_: string,
      ruleId_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stageCancel(
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stageDecision(
      verdict: DataTypes.InputDecisionStruct[],
      uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stageFile(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stageWaitForDecision(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}