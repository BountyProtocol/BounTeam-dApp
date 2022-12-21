/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  AssocRepo,
  AssocRepoInterface,
} from "../../../contracts/repositories/AssocRepo";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "originContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destinationContract",
        type: "address",
      },
    ],
    name: "Assoc",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "get",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "originContract",
        type: "address",
      },
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "getOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        internalType: "address",
        name: "destinationContract",
        type: "address",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610617806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806301ffc9a71461006757806306fdde031461008f57806332b631a6146100d6578063693ec85e1461010157806395d89b4114610114578063a815ff1514610138575b600080fd5b61007a61007536600461041a565b61014d565b60405190151581526020015b60405180910390f35b6100c96040518060400160405280601b81526020017a4f70656e204173736f63696174696f6e205265706f7369746f727960281b81525081565b6040516100869190610588565b6100e96100e43660046103cf565b610184565b6040516001600160a01b039091168152602001610086565b6100e961010f366004610449565b610258565b6100c9604051806040016040528060058152602001644153534f4360d81b81525081565b61014b610146366004610483565b610298565b005b60006001600160e01b0319821663f39d06ed60e01b148061017e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b6001600160a01b03821660009081526020819052604080822090518291906101ad9085906104fa565b90815260405160209181900382018120546001600160a01b03169290921415916101d991859101610516565b6040516020818303038152906040529061020f5760405162461bcd60e51b81526004016102069190610588565b60405180910390fd5b506001600160a01b0383166000908152602081905260409081902090516102379084906104fa565b908152604051908190036020019020546001600160a01b0316905092915050565b3360008181526020819052604080822090519192916102789085906104fa565b908152604051908190036020019020546001600160a01b03169392505050565b336000908152602081905260409081902090518291906102b99085906104fa565b90815260405190819003602001902080546001600160a01b03929092166001600160a01b03199092169190911790557fbbe921c50fd4a90a922d64db75a27a159d05d51a2dadaa292fd948a3a11668b66103103390565b838360405161032193929190610553565b60405180910390a15050565b80356001600160a01b038116811461034457600080fd5b919050565b600082601f830112610359578081fd5b81356001600160401b0380821115610373576103736105cb565b604051601f8301601f19908116603f0116810190828211818310171561039b5761039b6105cb565b816040528381528660208588010111156103b3578485fd5b8360208701602083013792830160200193909352509392505050565b600080604083850312156103e1578182fd5b6103ea8361032d565b915060208301356001600160401b03811115610404578182fd5b61041085828601610349565b9150509250929050565b60006020828403121561042b578081fd5b81356001600160e01b031981168114610442578182fd5b9392505050565b60006020828403121561045a578081fd5b81356001600160401b0381111561046f578182fd5b61047b84828501610349565b949350505050565b60008060408385031215610495578182fd5b82356001600160401b038111156104aa578283fd5b6104b685828601610349565b9250506104c56020840161032d565b90509250929050565b600081518084526104e681602086016020860161059b565b601f01601f19169290920160200192915050565b6000825161050c81846020870161059b565b9190910192915050565b7402330b4b632103a37902334b7321020b9b9b7b19d1605d1b81526000825161054681601585016020870161059b565b9190910160150192915050565b600060018060a01b0380861683526060602084015261057560608401866104ce565b9150808416604084015250949350505050565b60208152600061044260208301846104ce565b60005b838110156105b657818101518382015260200161059e565b838111156105c5576000848401525b50505050565b634e487b7160e01b600052604160045260246000fdfea26469706673582212208533aeaea2978ad0c252c67fb625d35f653309426b08e3a7f1b9f35bf7c78bef64736f6c63430008040033";

type AssocRepoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AssocRepoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AssocRepo__factory extends ContractFactory {
  constructor(...args: AssocRepoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AssocRepo> {
    return super.deploy(overrides || {}) as Promise<AssocRepo>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AssocRepo {
    return super.attach(address) as AssocRepo;
  }
  override connect(signer: Signer): AssocRepo__factory {
    return super.connect(signer) as AssocRepo__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AssocRepoInterface {
    return new utils.Interface(_abi) as AssocRepoInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssocRepo {
    return new Contract(address, _abi, signerOrProvider) as AssocRepo;
  }
}