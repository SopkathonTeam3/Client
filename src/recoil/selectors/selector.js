import { selector, useRecoilValue, selectorFamily } from 'recoil';

import { getLetter } from '../../utils/apis/getLetter';

import { userAtom } from '../atoms/bottleAtom';

export const getBottleSelector = selectorFamily({
  key: 'getBottleSelector',
  get:
    ({ userId, roomId }) =>
    async () => {
      const bottles = await getLetter(userId, roomId);
      return bottles;
    },
});
