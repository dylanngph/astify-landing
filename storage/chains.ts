import { ChainId } from '@bionlabs/core-sdk'
import {atomWithStorage} from 'jotai/utils'

export const chainAtoms = atomWithStorage('chains', ChainId.BSC_TESTNET)