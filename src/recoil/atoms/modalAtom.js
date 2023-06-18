import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const RequestModalAtom = atom({
  key: 'RequestModal',
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
