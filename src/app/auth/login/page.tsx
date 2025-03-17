"use client";

import "../../../styles/globals.css";
import { useState } from "react";
//Iconos :3
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaMicrosoft } from "react-icons/fa6";
import { AiOutlineEye, AiFillEye } from "react-icons/ai";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

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
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Ingresa tu contraseña"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <AiFillEye /> : <AiOutlineEye />}{" "}
                {/* Ojo abierto o cerrado */}
              </button>
            </div>
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
              Regístrate
            </a>
          </span>
        </div>

        {/* Línea divisoria */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">O continúa con</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        {/* Botones de redes sociales */}
        <div className="space-y-3">
          <button className="flex items-center justify-center w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300">
            <FcGoogle className="w-5 h-5 mr-3" />
            Continuar con Google
          </button>
          {/* Botón de Facebook */}
          <button className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            <FaFacebook className="w-5 h-5 mr-3" />
            Continuar con Facebook
          </button>
          {/* Botón de Microsoft */}
          <button className="flex items-center justify-center w-full py-2 px-4 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition duration-300">
            <FaMicrosoft className="w-5 h-5 mr-3" />
            Continuar con Microsoft
          </button>
        </div>
      </section>
    </main>
  );
}
