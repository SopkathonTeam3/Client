import { selector } from 'recoil';

import { getLetter } from '../../utils/apis/getLetter';

export const getBottleSelector = selector({
  key: 'getBottleSelector',
  get: async () => {
    const bottles = await getLetter();
    console.log(bottles);
    return bottles;
  },
});
