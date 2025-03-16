import Image from "next/image"

export default function Contact() {
const social = [
    {
        icon : "/@.svg",
        social : "elbuensabor@gmail.com"
    },
    {
        icon : "/phone.svg",
        social : "+54 9 2611456789"
    },
    {
        icon : "/location.svg",
        social : "San Martin 879, Mendoza, Mendoza"
    },
    {
        icon : "/facebook.svg",
        social : "@BuenSaborok"
    },
    {
        icon : "/instagram.svg",
        social : "@BuenSaborok"
    }
]

  return (
    <div className="max-w-7xl mx-auto mt-36 p-6">
    <div className=" bg-white shadow-2xl w-full rounded-lg py-6 px-10 grid grid-cols-3 justify-between">
            <div className="flex flex-col gap-4">
            {social.map((social , index)=> (
                    <div className="flex gap-4 items-center cursor-pointer" key={index}>
                        <Image
                        src={social.icon} 
                        alt="Imagen del banner"
                        width={34}
                        height={34}
                    />
                    <span>{social.social}</span>
                    </div>
                
                ))} 
            </div>
            <div className="flex">
            <Image
            src={"/ice3.png"} 
            alt="Imagen del banner"
            width={300}
            height={34}
            />
                <Image
            src={"/coffe.png"} 
            alt="Imagen del banner"
            width={400}
            height={34}
            />
            </div>
           
        </div>
    </div>
   
  )
}
