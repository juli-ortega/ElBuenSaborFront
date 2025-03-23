"use client";

import AuthGuard from "@/components/AuthGuard";

export default function Settings() {
  return (
    <AuthGuard>
      <div>
        <h1>Configuraciones</h1>
        <p>Aquí puedes cambiar tus configuraciones.</p>
      </div>
    </AuthGuard>
  );
}