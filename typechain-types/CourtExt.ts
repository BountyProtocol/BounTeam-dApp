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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace DataTypes {
  export type RuleRefStruct = { game: string; ruleId: BigNumberish };

  export type RuleRefStructOutput = [string, BigNumber] & {
    game: string;
    ruleId: BigNumber;
  };

  export type InputRoleTokenStruct = { tokenId: BigNumberish; role: string };

  export type InputRoleTokenStructOutput = [BigNumber, string] & {
    tokenId: BigNumber;
    role: string;
  };

  export type PostInputStruct = {
    tokenId: BigNumberish;
    entRole: string;
    uri: string;
  };

  export type PostInputStructOutput = [BigNumber, string, string] & {
    tokenId: BigNumber;
    entRole: string;
    uri: string;
  };
}

export interface CourtExtInterface extends utils.Interface {
  contractName: "CourtExt";
  functions: {
    "caseMake(string,string,(address,uint256)[],(uint256,string)[],(uint256,string,string)[])": FunctionFragment;
    "caseMakeClosed(string,string,(address,uint256)[],(uint256,string)[],(uint256,string,string)[],string)": FunctionFragment;
    "caseMakeOpen(string,string,(address,uint256)[],(uint256,string)[],(uint256,string,string)[])": FunctionFragment;
    "getRepoAddr()": FunctionFragment;
    "hub()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "caseMake",
    values: [
      string,
      string,
      DataTypes.RuleRefStruct[],
      DataTypes.InputRoleTokenStruct[],
      DataTypes.PostInputStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "caseMakeClosed",
    values: [
      string,
      string,
      DataTypes.RuleRefStruct[],
      DataTypes.InputRoleTokenStruct[],
      DataTypes.PostInputStruct[],
      string
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "caseMakeOpen",
    values: [
      string,
      string,
      DataTypes.RuleRefStruct[],
      DataTypes.InputRoleTokenStruct[],
      DataTypes.PostInputStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getRepoAddr",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hub", values?: undefined): string;

  decodeFunctionResult(functionFragment: "caseMake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "caseMakeClosed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "caseMakeOpen",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRepoAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hub", data: BytesLike): Result;

  events: {};
}

export interface CourtExt extends BaseContract {
  contractName: "CourtExt";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CourtExtInterface;

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
    caseMake(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    caseMakeClosed(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      decisionURI_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    caseMakeOpen(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRepoAddr(overrides?: CallOverrides): Promise<[string]>;

    hub(overrides?: CallOverrides): Promise<[string]>;
  };

  caseMake(
    name_: string,
    uri_: string,
    rules: DataTypes.RuleRefStruct[],
    assignRoles: DataTypes.InputRoleTokenStruct[],
    posts: DataTypes.PostInputStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  caseMakeClosed(
    name_: string,
    uri_: string,
    rules: DataTypes.RuleRefStruct[],
    assignRoles: DataTypes.InputRoleTokenStruct[],
    posts: DataTypes.PostInputStruct[],
    decisionURI_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  caseMakeOpen(
    name_: string,
    uri_: string,
    rules: DataTypes.RuleRefStruct[],
    assignRoles: DataTypes.InputRoleTokenStruct[],
    posts: DataTypes.PostInputStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRepoAddr(overrides?: CallOverrides): Promise<string>;

  hub(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    caseMake(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: CallOverrides
    ): Promise<string>;

    caseMakeClosed(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      decisionURI_: string,
      overrides?: CallOverrides
    ): Promise<string>;

    caseMakeOpen(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: CallOverrides
    ): Promise<string>;

    getRepoAddr(overrides?: CallOverrides): Promise<string>;

    hub(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    caseMake(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    caseMakeClosed(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      decisionURI_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    caseMakeOpen(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRepoAddr(overrides?: CallOverrides): Promise<BigNumber>;

    hub(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    caseMake(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    caseMakeClosed(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      decisionURI_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    caseMakeOpen(
      name_: string,
      uri_: string,
      rules: DataTypes.RuleRefStruct[],
      assignRoles: DataTypes.InputRoleTokenStruct[],
      posts: DataTypes.PostInputStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRepoAddr(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hub(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}