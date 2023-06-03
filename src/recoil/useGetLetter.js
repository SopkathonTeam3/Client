import axios from 'axios';

export const useGetLetter = async () => {
  try {
    const response = await axios.get(`https://api.floatbottle.kro.kr/post/1/1`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
