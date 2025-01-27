"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import Image from "next/image";

const links = [
    {
        name: "Inicio",
        path: "/",
    },
    {
        name: "Servicios",
        path: "/services",
    },
    {
        name: "Resumen",
        path: "/resume",
    },
    {
        name: "Trabajo",
        path: "/work",
    },
    {
        name: "Contacto",
        path: "/contact",
    },


]

const MobileNav = () => {
    const pathname = usePathname();
    return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* logo */}
            <div className="mt-32 mb-40 text-center text-2xl">
                <Link href="/">
                    <Image 
                    src= "/assets/JFC.png"
                    width={150}
                    height={50}
                    alt="Juan Felipe Chilito"
                    className="mx-auto"
                    />
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    )
                })}
            </nav>
        </SheetContent>
    </Sheet>
    )
}

export default MobileNav