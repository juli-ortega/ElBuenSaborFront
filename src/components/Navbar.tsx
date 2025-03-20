"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [userAuth, setUserAuth] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const dropdown = [
    {
      "name" : "Mis Direcciones",
      "icon" : "/location.svg"
    },
    {
      "name" : "Mis Órdenes",
      "icon" : "/order.svg"
    },
    {
      "name" : "Mi Perfil",
      "icon" : "/profile.svg"
    },
    {
      "name" : "Cerrar Sesión",
      "icon" : "/logout.svg"
    }
  ]

  // Cierra el menú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-bg-light">
      <div className="flex justify-between items-center w-full max-w-8xl mx-auto px-4">
      <Image src="/logo3.svg" alt="logo" width={180} height={1} />
      <Link href="/product">
        <div> 
          <h2 className="font-display">Productos</h2>
        </div>
      </Link>
        {userAuth ? (
          <div className="space-x-10 flex items-center">
            {/* Contenedor del dropdown */}
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center space-x-3 border-x border-gris px-2 cursor-pointer py-2"
                onClick={() => setOpen(!open)}
              >
                <Image 
                src="/user.svg" 
                alt="usuario" 
                width={24} 
                height={24} />
                <div className="flex items-center space-x-1">
                  <p className="font-display">Nombre Apellido</p>
                  <Image
                    src="/arrow.svg"
                    alt="desplegable"
                    width={18}
                    height={18}
                  />
                </div>
              </div>

              {/* Menú desplegable */}
              {open && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-black border border-gris rounded-lg shadow-lg z-10">
                  <ul className="text-gray-700">
                    {dropdown.map((drop , index) => (
                        <div className="flex px-4 space-x-1 hover:bg-gray-100  py-2  cursor-pointer" key={index}>
                        <Image
                        src={drop.icon}
                        alt="desplegable"
                        width={18}
                        height={18}
                        />
                        <li className="font-display text-gris-oscuro text-[14px]">
                          {drop.name === "Mis Órdenes" ? (
                            <Link href="/order">
                              {drop.name}
                            </Link>
                          ) : (
                            drop.name
                          )}
                        </li>
                      </div>
                    ))}
                 
                  </ul>
                </div>
              )}
            </div>

            {/* Icono del carrito */}
            <Image
              src="/shop.svg"
              alt="Carrito"
              width={26}
              height={26}
              className="cursor-pointer"
            />
          </div>
        ) : (
          <div className="space-x-6">
            <Link href={"/auth/resgister/"}>
              <button className="font-display px-4 py-3 text-white cursor-pointer text-[12px] bg-principal rounded-[10px] font-semibold uppercase tracking-widest hover:text-white hover:bg-secundario">
                Registrate
              </button>
            </Link>
            <Link  href={"/auth/login/"}>
              <button className="font-display uppercase cursor-pointer text-[14px] hover:bg-gris-claro py-3 px-4 rounded-[10px]">
                Ingresar
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
