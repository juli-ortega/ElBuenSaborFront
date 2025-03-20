"use client";

import { useState } from "react";

export default function Order() {
  const [tab, setTab] = useState("pendientes");

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mis Órdenes</h1>

      {/* Navegación de pestañas */}
      <div className="flex space-x-4 border-b mb-4">
        <button
          className={`pb-2 px-4 ${tab === "pendientes" ? "border-b-2 border-blue-500 text-blue-500" : ""}`}
          onClick={() => setTab("pendientes")}
        >
          Pendientes
        </button>
        <button
          className={`pb-2 px-4 ${tab === "completadas" ? "border-b-2 border-green-500 text-green-500" : ""}`}
          onClick={() => setTab("completadas")}
        >
          Completadas
        </button>
        <button
          className={`pb-2 px-4 ${tab === "canceladas" ? "border-b-2 border-red-500 text-red-500" : ""}`}
          onClick={() => setTab("canceladas")}
        >
          Canceladas
        </button>
      </div>

      {/* Contenido de cada pestaña */}
      <div>
        {tab === "pendientes" && <p>Mostrando órdenes pendientes...</p>}
        {tab === "completadas" && <p>Mostrando órdenes completadas...</p>}
        {tab === "canceladas" && <p>Mostrando órdenes canceladas...</p>}  
      </div>
    </div>
  );
}
