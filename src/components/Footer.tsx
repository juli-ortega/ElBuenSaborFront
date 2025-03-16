import Image from "next/image";

export default function Footer() {

    const links = [
        {
            nameLink : "Como Funciona",
            link : ""
        },
        {
            nameLink : "Sobre Nosotros",
            link : ""
        },
        {
            nameLink : "Contactanos",
            link : ""
        },
    ]

  return (
    <div className="bg-terciario mt-20">
        <div className="max-w-8xl mx-auto grid grid-cols-2 justify-between items-center">
        <Image 
        src="/logo3.svg" 
        alt="logo" 
        width={180} 
        height={1} />
        <ul className="flex gap-28">
            {links.map((link , index) => (
                <li key={index} className="hover:border-b border-white cursor-pointer">
                    <span  className="font-display italic font-semibold text-[18px] text-white">{link.nameLink}</span>
                </li>
            ))}
        </ul>
        </div>
    </div>
  )
}
