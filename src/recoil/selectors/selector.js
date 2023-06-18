import { selector, useRecoilValue, selectorFamily } from 'recoil';

import { getLetter } from '../../utils/apis/getLetter';

import { userAtom } from '../atoms/bottleAtom';

// export const getBottleSelector = selector({
//   key: 'getBottleSelector',
//   get: async () => {
//     const { userId, roomId } = useRecoilValue(userAtom);
//     console.log(userId, roomId);
//     const bottles = await getLetter(userId, roomId);
//     console.log(bottles);
//     return bottles;
//   },
// });
export const getBottleSelector = selectorFamily({
  key: 'getBottleSelector',
  get:
    ({ userId, roomId }) =>
    async () => {
      // const { userId, roomId } = useRecoilValue(userAtom);
      // console.log(userId, roomId);
      const bottles = await getLetter(userId, roomId);
      console.log(bottles);
      return bottles;
    },
});
