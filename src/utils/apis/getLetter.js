import { client } from '../../lib/axios';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../recoil/atoms/bottleAtom';
import axios from 'axios';

// const { userId, roomId } = useRecoilValue(userAtom);

export const getLetter = async () => {
  const { userId, roomId } = useRecoilValue(userAtom);
  try {
    const { data } = await axios.get(`https://api.floatbottle.kro.kr/post/${userId}/${roomId}`);
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
