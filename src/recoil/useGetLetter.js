import axios from 'axios';
// 커스텀 훅에만 use를 사용하는것이 관행입니다!
export const getLetter = async () => {
  try {
    const response = await axios.get(`https://api.floatbottle.kro.kr/post/1/1`);
    console.log(response.data.post);
    return response.data;
  } catch (e) {
    console.error(e);
  }
};
