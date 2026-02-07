import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/types';
import { mockLoginApi } from '@/services/authService';

interface AuthState {
  token: string | null;
  user: User | null;
  login: (email: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,

      login: async (email) => {
        const response = await mockLoginApi(email);
        set({ token: response.token, user: response.user });
      },

      logout: () => set({ token: null, user: null }),
    }),
    { name: 'auth-storage' }
  )
);