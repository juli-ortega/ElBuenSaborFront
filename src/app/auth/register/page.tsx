"use client"; // Añadir esta directiva al inicio del archivo

import "../../../styles/globals.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaMicrosoft } from "react-icons/fa6";
import { useState } from "react";
import { AiOutlineEye, AiFillEye } from "react-icons/ai"; // Importar íconos

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <section className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Registrarse
        </h2>

        <form className="flex flex-col space-y-4">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold text-gray-700"
            >
              Nombre
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="Ingresa tu nombre"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold text-gray-700"
            >
              Apellido
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Ingresa tu apellido"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="age"
              className="block text-sm font-semibold text-gray-700"
            >
              Edad
            </label>
            <input
              type="number"
              id="age"
              placeholder="Ingresa tu edad"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu correo"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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
              placeholder="Elige un nombre de usuario"
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
                placeholder="Crea una contraseña"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <AiFillEye /> : <AiOutlineEye />}{" "}
                {/* Iconos de ojo */}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-semibold text-gray-700"
            >
              Confirmar contraseña
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="Confirma tu contraseña"
                className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <AiFillEye /> : <AiOutlineEye />}{" "}
                {/* Iconos de ojo */}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
          >
            Registrarse
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <span className="text-sm text-gray-600">
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Inicia sesión
            </a>
          </span>
        </div>

        {/* Línea divisoria */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm">O regístrate con</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Botones de redes sociales */}
        <div className="space-y-3">
          <button className="flex items-center justify-center w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300">
            <FcGoogle className="w-5 h-5 mr-3" />
            Registrarse con Google
          </button>
          <button className="flex items-center justify-center w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300">
            <FaFacebook className="w-5 h-5 mr-3" />
            Registrarse con Facebook
          </button>
          <button className="flex items-center justify-center w-full py-2 px-4 bg-sky-600 text-white font-semibold rounded-md hover:bg-sky-700 transition duration-300">
            <FaMicrosoft className="w-5 h-5 mr-3" />
            Registrarse con Microsoft
          </button>
        </div>
      </section>
    </main>
  );
}
