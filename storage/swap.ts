import {atomWithStorage} from 'jotai/utils'


export enum Field {
  INPUT = "INPUT",
  OUTPUT = "OUTPUT",
}

export interface SwapState {
  readonly independentField: Field;
  readonly typedValue: string;
  readonly [Field.INPUT]: {
    readonly currencyId: string | undefined;
  };
  readonly [Field.OUTPUT]: {
    readonly currencyId: string | undefined;
  };
  // the typed recipient address or ENS name, or null if swap should go to sender
  readonly recipient?: string;
  readonly maxFee?: string;
  readonly maxPriorityFee?: string;
}

const initialSwapState: SwapState = {
    independentField: Field.INPUT,
    typedValue: "",
    [Field.INPUT]: {
      currencyId: "",
    },
    [Field.OUTPUT]: {
      currencyId: "",
    },
    recipient: undefined,
    maxFee: undefined,
    maxPriorityFee: undefined,
  };

export const swapStateAtom = atomWithStorage('initialSwapState', initialSwapState)

