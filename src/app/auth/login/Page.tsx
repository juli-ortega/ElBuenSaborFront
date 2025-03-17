import "../styles/globals.css";

export default function Login() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <section className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Iniciar sesión
        </h2>

        <form className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700"
            >
              Nombre de usuario
            </label>
            <input
              type="text"
              id="username"
              placeholder="Ingresa tu usuario"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <span className="text-sm text-gray-600">
            ¿No tienes cuenta?{" "}
            <a href="/signup" className="text-blue-500 hover:underline">
              Registrate
            </a>
          </span>
        </div>

        <div className="mt-6 space-y-3">
          <button className="flex items-center justify-center w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Google_2015_logo.svg"
              alt="Google"
              className="w-5 h-5 mr-3"
            />
            Continuar con Google
          </button>

          <button className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Logos_of_Facebook.svg"
              alt="Facebook"
              className="w-5 h-5 mr-3"
            />
            Continuar con Facebook
          </button>

          <button className="flex items-center justify-center w-full py-2 px-4 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition duration-300">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Microsoft_logo_2020.svg"
              alt="Microsoft"
              className="w-5 h-5 mr-3"
            />
            Continuar con Microsoft
          </button>
        </div>
      </section>
    </main>
  );
}
