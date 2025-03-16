import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="max-w-8xl mx-auto mt-8 grid grid-cols-2 items-center">
      {/* Sección Izquierda */}
      <div className="relative space-y-6">
        <h1 className="text-7xl w-[500px] font-display font-semibold relative">
          Ordena Desde La Comodidad De Casa
          <Image
            src="/arrow-19.svg"
            alt="usuario"
            width={100}
            height={40}
            className="absolute bottom-[-70px] right-[100px]"
          />
        </h1>
        <button className="font-display px-6 py-4 w-70 text-white cursor-pointer text-[12px] bg-terciario rounded-[10px] font-semibold uppercase tracking-widest hover:text-white hover:bg-secundario">
          Catálogo
        </button>
      </div>

      {/* Sección Derecha - Imagen del Banner */}
      <div className="w-full flex justify-center">
        <div className="relative w-full h-auto">
            <Image
            src="/banner.jpg"
            alt="banner"
            width={500}
            height={300}
            className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-terciario/12 rounded-lg"></div>
        </div> 
    </div>

    </div>
  );
}
