import { client } from './axios';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../recoil/atoms/bottleAtom';

export const useGetLetter = async () => {
  const { userId, roomId } = useRecoilValue(userAtom);
  try {
    const { data } = await client.get(`/post/${userId}/${roomId}`);

    return data.data;
  } catch (e) {
    console.error(e);
  }
};
