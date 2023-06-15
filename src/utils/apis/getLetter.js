import { client } from './axios';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../recoil/atoms/bottleAtom';
import axios from 'axios';

// const { userId, roomId } = useRecoilValue(userAtom);

export const getLetter = async (userId, roomId) => {
  // const { userId, roomId } = useRecoilValue(userAtom);
  try {
    const { data } = await client.get(`/post/${userId}/${roomId}`);
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
