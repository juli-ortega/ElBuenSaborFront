import Image from "next/image";

export default function Page() {
    return (
      <div className="max-w-7xl mx-auto bg-white shadow-2xl px-4 py-20 overflow-hidden rounded-2xl">
        <div className="flex items-center gap-6">
        <Image
        src={"/chef.svg"}
        alt=""
        width={40}
        height={40}
        />
        <h2>
            Cocina
        </h2>
        </div>
        <table className="min-w-full border-collapse border border-gray-300 rounded-2xl">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Order</th>
              <th className="px-4 py-2">Cliente</th>
              <th className="px-4 py-2">Tiempo</th>
              <th className="px-4 py-2">Envío</th>
              <th className="px-4 py-2">Estado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">#1234</td>
              <td className="px-4 py-2">Juan Pérez</td>
              <td className="px-4 py-2">30 min</td>
              <td className="px-4 py-2">En camino</td>
              <td className="px-4 py-2 text-green-500">Entregado</td>
            </tr>
            <tr>
              <td className="px-4 py-2">#1235</td>
              <td className="px-4 py-2">María López</td>
              <td className="px-4 py-2">45 min</td>
              <td className="px-4 py-2">Pendiente</td>
              <td className="px-4 py-2 text-yellow-500">En preparación</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  