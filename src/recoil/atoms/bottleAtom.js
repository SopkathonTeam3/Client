import axios from 'axios';
import { getLetter } from '../../utils/apis/getLetter';
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const bottleAtom = atom({
  key: 'bottleState',
  default: {},
});

export const userAtom = atom({
  key: 'userAtom',
  default: {
    userId: 0,
    roomId: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const modalAtom = atom({
  key: 'modalAtom',
  default: {
    value: 1,
  },
});

export const shareReqModalAtom = atom({
  key: 'shareReqModalAtom',
  default: 0,
  // effects_UNSTABLE: [persistAtom],
});
