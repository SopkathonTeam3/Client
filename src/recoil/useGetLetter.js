import axios from 'axios';

export const useGetLetter = async () => {
  try {
    const { data } = await axios.get(`https://api.floatbottle.kro.kr/post/1/1`);
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
