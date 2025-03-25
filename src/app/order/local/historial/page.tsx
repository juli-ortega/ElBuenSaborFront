export default function HistorialLocal() {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Historial de Pedidos del Local</h1>
            
            <div className="border-t pt-4 space-y-4">
                {/* Simulación de pedidos */}
                {[1, 2, 3].map((order) => (
                    <div key={order} className="bg-gray-100 p-4 rounded-lg shadow">
                        <div className="flex justify-between">
                            <h2 className="text-lg font-semibold">Orden #{order}</h2>
                            <span className="text-sm text-gray-500">Fecha: 2024-03-25</span>
                        </div>
                        <p className="text-gray-700">Total: $ 1,500.00</p>
                        <p className="text-gray-600 text-sm">Estado: <span className="text-green-600 font-semibold">Entregado</span></p>
                    </div>
                ))}
            </div>
            
            <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Cargar más órdenes
            </button>
        </div>
    );
}
