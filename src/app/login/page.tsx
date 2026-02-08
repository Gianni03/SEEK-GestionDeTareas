'use client';

import styles from './page.module.css';
import Input from '@/components/ui/Input/Input';
import Button from '@/components/ui/Button/Button';
import { useAuthStore } from '@/store/useAuthStore';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const login = useAuthStore((state) => state.login);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await login(name, email);
      router.push('/dashboard');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Error al iniciar sesión');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <section className={styles.leftSide}>
        <h1 className={styles.title}>Estrategia, diseño e innovación.</h1>

        <form onSubmit={handleSubmit}>
          {error && <div className={styles.error}>{error}</div>}

          <Input
            label="Nombre"
            type="text"
            id="name"
            placeholder="Tu nombre"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Correo electrónico"
            type="email"
            id="email"
            placeholder="ejemplo@seek.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" disabled={loading}>
            {loading ? 'Iniciando...' : 'Iniciar sesión'}
          </Button>
        </form>
      </section>

      <section className={styles.rightSide}>
        <svg
          className={styles.scribble}
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="500"
          viewBox="0 0 500 500"
          fill="none"
        >
          <path
            d="
      M260 430
      C180 410, 60 300, 90 250
      C120 200, 300 260, 280 300
      C255 350, 140 330, 150 270
      C160 200, 360 140, 330 200
      C300 260, 180 180, 200 130
      C225 80, 360 90, 370 150
      C380 220, 180 240, 160 180
      C140 110, 260 40, 320 70
      C390 110, 340 300, 260 290
      C190 280, 210 180, 260 190
      C310 200, 320 260, 300 300
      C285 330, 305 350, 325 330
      L350 360
      L410 300
    "
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </section>
    </div>
  );
}
