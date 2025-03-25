export default function ShoppingCart() {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Carrito de Compras</h1>
            <div className="border-t pt-4">
                <p className="text-gray-600">Tu carrito está vacío.</p>
            </div>
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Seguir comprando
            </button>
        </div>
    );
}