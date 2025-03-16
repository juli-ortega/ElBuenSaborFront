import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    const links = [
        {
            nameLink: "Como Funciona",
            link: "#steps"
        },
        {
            nameLink: "Sobre Nosotros",
            link: "#about"
        },
        {
            nameLink: "Contactanos",
            link: "#contact"
        },
    ];

    return (
        <div className="bg-principal mt-20 py-12">
            <div className="max-w-8xl mx-auto grid grid-cols-2 justify-between items-center">
                <Image 
                    src="/logowhite.svg" 
                    alt="logo" 
                    width={300} 
                    height={1} 
                />
                <ul className="flex gap-28">
                    {links.map((link, index) => (
                        <li key={index} className="hover:border-b border-white cursor-pointer">
                            <Link href={link.link} className="font-display italic font-semibold text-[18px] text-white">
                                {link.nameLink}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Información adicional legal */}
            <div className="max-w-8xl mx-auto mt-8 text-center">
                <p className="text-white text-sm">
                    &copy; {new Date().getFullYear()} El Buen Sabor. Todos los derechos reservados.
                </p>
                <div className="mt-4 flex justify-center gap-8">
                    <Link href="/politicas-privacidad">
                        <span className="text-white text-sm hover:underline">Políticas de Privacidad</span>
                    </Link>
                    <Link href="/terminos-condiciones">
                        <span className="text-white text-sm hover:underline">Términos y Condiciones</span>
                    </Link>
                    <Link href="/derechos-consumidor">
                        <span className="text-white text-sm hover:underline">Derechos del Consumidor</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
