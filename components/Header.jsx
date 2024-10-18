import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

// Componets
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
    return <header className="py-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/">
                <Image 
                    src= "/assets/JFC.png"
                    width={150}
                    height={50}
                    alt="Juan Felipe Chilito"
                />
            </Link>
            {/* desktop nav & hire me button*/}
            <div className="hidden xl:flex items-center gap-8">
                <Nav></Nav>
                <Link href="/contact">
                    <Button>Contáctame</Button>
                </Link>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav />
            </div>
        </div>
    </header>;
};

export default Header