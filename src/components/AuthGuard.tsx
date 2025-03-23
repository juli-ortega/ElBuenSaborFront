"use client";

import { useUser } from '@auth0/nextjs-auth0/client';
import { useEffect, useState, ReactNode } from 'react';

interface AuthGuardProps {
  children: ReactNode; // Contenido que se mostrará si el usuario está autenticado
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const { user, error, isLoading } = useUser();
  const [showAccessMessage, setShowAccessMessage] = useState(false);

  // Configurar un temporizador para mostrar el mensaje después de un tiempo
  useEffect(() => {
    if (!isLoading && !user) {
      const timer = setTimeout(() => {
        setShowAccessMessage(true);
      }, 2000); // Espera de 2 segundos

      return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }
  }, [isLoading, user]);

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!user && showAccessMessage) {
    return (
      <div>
        <p>No tienes acceso a esta página. Por favor, inicia sesión.</p>
        <button
          onClick={() => window.location.assign('/api/auth/login')}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Iniciar Sesión
        </button>
      </div>
    );
  }

  if (!user) {
    return null; // No mostrar nada mientras se espera
  }

  return <>{children}</>; // Renderizar el contenido si el usuario está autenticado
}