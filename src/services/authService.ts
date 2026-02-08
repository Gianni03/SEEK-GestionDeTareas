import { AuthResponse, User } from '@/types';
import wait from '@/utils/wait';

/**
 * @function mockLoginApi
 * @description Simula una petición de login a una API
 * @param {string} name - Nombre del usuario
 * @param {string} email - Correo electrónico del usuario
 * @returns {Promise<AuthResponse>} - Respuesta de la petición
 */
export const mockLoginApi = async (
  name: string,
  email: string
): Promise<AuthResponse> => {
  await wait(600);

  const usersJson = localStorage.getItem('mock_users');
  const users: User[] = usersJson ? JSON.parse(usersJson) : [];

  const existingEmailUser = users.find((u) => u.email === email);
  if (existingEmailUser && existingEmailUser.name !== name) {
    throw new Error(`El correo '${email}' ya está registrado con otro nombre.`);
  }

  const existingNameUser = users.find((u) => u.name === name);
  if (existingNameUser && existingNameUser.email !== email) {
    throw new Error(`El nombre '${name}' ya está registrado con otro correo.`);
  }

  const userData = existingEmailUser || {
    id: crypto.randomUUID(),
    email: email,
    name: name,
  };

  if (!existingEmailUser) {
    users.push(userData);
    localStorage.setItem('mock_users', JSON.stringify(users));
  }

  const token = btoa(JSON.stringify(userData));

  return {
    token: token,
    user: userData,
  };
};
