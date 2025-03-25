// app/order/producto/[id]/page.tsx
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Producto {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  cantidad: number;
  estado: string;
}

const ProductoDetailPage = () => {
  const [producto, setProducto] = useState<Producto | null>(null);
  const { id } = useParams();

  useEffect(() => {
    //if (!id) return; // Asegurar que id está disponible

    // Simulación de API call para obtener detalles del producto
    const fetchProducto = async () => {
      const data: Producto = {
        id: id as string,
        nombre: "Pizza Napolitana",
        descripcion: "Deliciosa pizza con tomate, mozzarella y albahaca fresca.",
        precio: 1200,
        imagen: "https://via.placeholder.com/300",
        cantidad: 2,
        estado: "En preparación",
      };

      console.log("Producto obtenido:", data);
      setProducto(data);
    };

    fetchProducto();
  }, [id]);

  if (!producto) {
    return <p>Cargando el pedido...</p>;
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
          <p className="text-lg font-bold mt-2">Precio: ${producto.precio}</p>
          <p className="text-gray-600">Cantidad: {producto.cantidad}</p>
          <p className="text-gray-600">Estado: <span className="font-semibold text-blue-600">{producto.estado}</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProductoDetailPage;
