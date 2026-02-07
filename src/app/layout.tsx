import './globals.css';

export const metadata = {
  title: 'SEEK - Task Manager',
  description: 'Gestión de tareas con enfoque en diseño e innovación',
  icons: {
    icon: '/favicon-32x32.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}