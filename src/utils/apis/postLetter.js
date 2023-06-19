import { client } from './axios';

export const postLetter = async (userId, roomId, firstAnswer, secondAnswer) => {
  try {
    const { data } = await client.post(`/post/${userId}/${roomId}`, {
      firstAnswer,
      secondAnswer,
    });
  } catch (e) {
    console.error(e);
  }
};
