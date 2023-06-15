import { client } from './axios';

export const usePostUser = async reqData => {
  try {
    const { data } = await client.post('user', reqData);
    return data.data;
  } catch (e) {
    console.error(e);
  }
};
