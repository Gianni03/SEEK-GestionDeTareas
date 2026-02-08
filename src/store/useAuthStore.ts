import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types';
import { mockLoginApi } from '@/services/authService';

/**
 * @interface AuthState
 * @description Interface para representar el estado de autenticación
 * @property {string | null} token - Token de autenticación
 * @property {User | null} user - Usuario autenticado
 * @property {(name: string, email: string) => Promise<void>} login - Función para iniciar sesión
 * @property {() => void} logout - Función para cerrar sesión
 */
interface AuthState {
  token: string | null;
  user: User | null;
  login: (name: string, email: string) => Promise<void>;
  logout: () => void;
}

/**
 * @function useAuthStore
 * @description Hook para manejar el estado de autenticación
 * @returns {AuthState} - Estado de autenticación
 */
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,

      login: async (name, email) => {
        const response = await mockLoginApi(name, email);
        set({ token: response.token, user: response.user });
      },

      logout: () => set({ token: null, user: null }),
    }),
    { name: 'auth-storage' }
  )
);
