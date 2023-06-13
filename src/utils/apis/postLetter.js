import { client } from './axios';

export const postLetter = async (userId, roomId, firstAnswer, secondAnswer) => {
  try {
    const { data } = await client.post(`/post/${userId}/${roomId}`, {
      firstAnswer,
      secondAnswer,
    });

    console.log('@@@@@@@@@' + data);
  } catch (e) {
    console.error(e);
  }
};
