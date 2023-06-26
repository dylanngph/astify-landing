import {
  DEFAULT_ACTIVE_LIST_URLS,
  DEFAULT_LIST_OF_LISTS,
} from "@/configs/tokenLists";
import { WrappedTokenInfo } from "@/entities/WrappedTokenInfo";
import { TokenList } from "@uniswap/token-lists";
import { atomWithStorage } from "jotai/utils";

type TokenMap = Readonly<{
  [tokenAddress: string]: { token: WrappedTokenInfo; list?: TokenList };
}>;
export type ChainTokenMap = Readonly<{ [chainId: number]: TokenMap }>;
export type TokenAddressMap = ChainTokenMap;

export interface ListsState {
  readonly byUrl: {
    readonly [url: string]: {
      readonly current: TokenList | null;
      readonly pendingUpdate: TokenList | null;
      readonly loadingRequestId: string | null;
      readonly error: string | null;
    };
  };
  // this contains the default list of lists from the last time the updateVersion was called, i.e. the app was reloaded
  readonly lastInitializedDefaultListOfLists?: string[];

  // currently active lists
  readonly activeListUrls: string[] | undefined;
}

type ListState = ListsState["byUrl"][string];

const NEW_LIST_STATE: ListState = {
  error: null,
  current: null,
  loadingRequestId: null,
  pendingUpdate: null,
};

type Mutable<T> = {
  -readonly [P in keyof T]: T[P] extends ReadonlyArray<infer U> ? U[] : T[P];
};

export const initialState: ListsState = {
  lastInitializedDefaultListOfLists: DEFAULT_LIST_OF_LISTS,
  byUrl: {
    ...DEFAULT_LIST_OF_LISTS.reduce<Mutable<ListsState["byUrl"]>>(
      (memo, listUrl) => {
        memo[listUrl] = NEW_LIST_STATE;
        return memo;
      },
      {}
    ),
  },
  activeListUrls: DEFAULT_ACTIVE_LIST_URLS,
};

export const tokenListAtom = atomWithStorage("tokenList", initialState);
