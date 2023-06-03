import { client } from './axios';

export const useGetLetter = async () => {
  try {
    const { data } = await client.get(`/post/1/1`);
    // throw new Error();
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
