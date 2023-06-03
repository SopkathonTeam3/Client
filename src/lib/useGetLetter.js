import { client } from './axios';

export const useGetLetter = async () => {
  try {
    const { data } = await client.get(`/post/1/1`);
    // throw new Error();
    console.log(data.data);
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
