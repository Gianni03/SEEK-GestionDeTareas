import { AuthResponse } from '@/types';
import wait from '@/utils/wait';

export const mockLoginApi = async (email: string): Promise<AuthResponse> => {
  await wait(600);

  const userData = {
    id: "Seek",
    email: email,
    name: email.split('@')[0]
  };

  const token = btoa(JSON.stringify(userData)); // btoa es una función que convierte un string a Base64

  return {
    token: token,
    user: userData
  };
};