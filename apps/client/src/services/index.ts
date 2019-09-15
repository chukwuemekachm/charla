import api from './api';

export async function authenticateUser(authCode) {
  try {
    const { data } = await api.get(`/oauth/google-callback${authCode}`);
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
