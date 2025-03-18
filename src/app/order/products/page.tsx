// app/order/producto/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use next/navigation for router in Server Components

interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
}

const ProductoDetailPage = () => {
  const [producto, setProducto] = useState<Producto | null>(null);
  const { id } = useParams(); // Using useParams from next/navigation to access the product ID

  useEffect(() => {
    if (id) {
      // Simulating API call to fetch the product details based on the 'id'
      const fetchProducto = async () => {
        const res = await fetch(`http://localhost:8000/api/productos/${id}`);
        const data: Producto = await res.json();
        setProducto(data);
      };

      fetchProducto();
    }
  }, [id]);

  if (!producto) {
    return <p>Espera ahi vienen los productos...</p>; // Display a loading message until data is fetched
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{producto.nombre}</h1>
      <div className="flex">
        <img
          src={producto.imagen}
          alt={producto.nombre}
          className="w-1/3 h-64 object-cover mb-4"
        />
        <div className="ml-4">
          <p className="text-gray-700">{producto.descripcion}</p>
          <p className="text-lg font-bold mt-4">${producto.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetailPage;
