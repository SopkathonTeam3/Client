import axios from 'axios';

export const getLetter = async (userId, roomId) => {
  try {
    const { data } = await axios.get(`https://api.floatbottle.kro.kr/post/${userId}/${roomId}`);
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
