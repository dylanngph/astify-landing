import { DEFAULT_DEADLINE_FROM_NOW } from "@/constants/common";
import { Percent } from "@bionlabs/core-sdk";
import { atomWithStorage } from "jotai/utils";

export interface SerializedToken {
  chainId: number;
  address: string;
  decimals: number;
  symbol?: string;
  name?: string;
}

export interface SerializedPair {
  token0: SerializedToken;
  token1: SerializedToken;
}

export interface UserState {
  // the timestamp of the last updateVersion action
  lastUpdateVersionTimestamp?: number;

  userExpertMode: boolean;

  userSingleHopOnly: boolean; // only allow swaps on direct pairs

  // deadline set by user in minutes, used in all txns
  userDeadline: number;

  tokens: {
    [chainId: number]: {
      [address: string]: SerializedToken;
    };
  };

  pairs: {
    [chainId: number]: {
      // keyed by token0Address:token1Address
      [key: string]: SerializedPair;
    };
  };

  timestamp: number;
  URLWarningVisible: boolean;
  // user defined slippage tolerance in bips, used in all txns
  userSlippageToleranceInput: string;
}

export const V2_SWAP_DEFAULT_SLIPPAGE = new Percent(50, 10_000);
const currentTimestamp = () => new Date().getTime();

export const initialState: UserState = {
  userExpertMode: false,
  userSingleHopOnly: false,
  userDeadline: DEFAULT_DEADLINE_FROM_NOW,
  tokens: {},
  pairs: {},
  timestamp: currentTimestamp(),
  URLWarningVisible: true,
  userSlippageToleranceInput: V2_SWAP_DEFAULT_SLIPPAGE.toFixed(),
};

export const usersAtom = atomWithStorage("userState", initialState);