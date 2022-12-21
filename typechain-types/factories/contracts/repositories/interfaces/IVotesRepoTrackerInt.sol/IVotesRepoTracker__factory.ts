/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVotesRepoTracker,
  IVotesRepoTrackerInterface,
} from "../../../../../contracts/repositories/interfaces/IVotesRepoTrackerInt.sol/IVotesRepoTracker";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "delegator",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "fromDelegate",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "toDelegate",
        type: "uint256",
      },
    ],
    name: "DelegateChangedToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "delegate",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "previousBalance",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "newBalance",
        type: "int256",
      },
    ],
    name: "DelegateVotesChangedToken",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accountToken",
        type: "uint256",
      },
    ],
    name: "delegatesToken",
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
        internalType: "uint256",
        name: "account",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotesForToken",
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
    name: "getTargetContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "account",
        type: "uint256",
      },
    ],
    name: "getVotesForToken",
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
    inputs: [
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
      {
        internalType: "int256",
        name: "amount",
        type: "int256",
      },
    ],
    name: "transferVotingUnits",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IVotesRepoTracker__factory {
  static readonly abi = _abi;
  static createInterface(): IVotesRepoTrackerInterface {
    return new utils.Interface(_abi) as IVotesRepoTrackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVotesRepoTracker {
    return new Contract(address, _abi, signerOrProvider) as IVotesRepoTracker;
  }
}