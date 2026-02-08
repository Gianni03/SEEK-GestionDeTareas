import { describe, it, expect, beforeEach } from '@jest/globals';
import { act, renderHook } from '@testing-library/react';
import { useAuthStore } from '../useAuthStore';

describe('useAuthStore', () => {
  beforeEach(() => {
    act(() => {
      useAuthStore.getState().logout();
    });
  });

  it('debería iniciar con un usuario null', () => {
    const { result } = renderHook(() => useAuthStore());
    expect(result.current.user).toBeNull();
  });

  it('debería iniciar sesión correctamente', async () => {
    const { result } = renderHook(() => useAuthStore());
    await act(async () => {
      await result.current.login('usuario', 'contraseña');
    });
    expect(result.current.user).not.toBeNull();
    expect(result.current.user?.name).toBe('usuario');
    expect(result.current.token).toBeDefined();
  });

  it('debería cerrar sesión correctamente', async () => {
    const { result } = renderHook(() => useAuthStore());
    await act(async () => {
      await result.current.login('usuario', 'contraseña');
    });
    act(() => {
      result.current.logout();
    });
    expect(result.current.user).toBeNull();
    expect(result.current.token).toBeNull();
  });
});
