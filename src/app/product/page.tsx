"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface Producto {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
}

type Categoria = {
  id: string;
  nombre: string;
  productos: Producto[];
}

const OrderPage = () => {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
  
    useEffect(() => {
      // Simulación de una llamada fetch a la API
      const fetchCategorias = async () => {
        // Aquí puedes poner la URL de tu backend
        const res = await fetch("http://localhost:8000/api/categorias");
        const data: Categoria[] = await res.json();
        setCategorias(data);
      };
  
      fetchCategorias();
    }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="fonr-display bg-amber-200 p-4 rounded-lg mb-4">
        <button className="text-2xl font-bold">Buscar</button>
        <input id="search" type="text" />

      </div>
      <h1 className="text-2xl font-bold mb-4 f font-display" >Productos</h1>
      {categorias.map((categoria) => (
        <div key={categoria.id} className="mb-6">
          <h2 className="text-xl font-semibold">{categoria.nombre}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            {categoria.productos.map((producto) => (
              <div key={producto.id} className="border p-4 rounded-lg shadow">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-40 object-cover mb-2"
                />
                <h3 className="font-bold">{producto.nombre}</h3>
                <p className="text-gray-700">${producto.precio}</p>
                <Link href={`/product/${producto.id}`}>
                  <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                    Ver Detalles
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderPage;
