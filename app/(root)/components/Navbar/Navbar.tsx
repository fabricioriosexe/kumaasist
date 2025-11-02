import { Logo } from "@/components/shared";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";

export function Navbar(){
    return(
        <nav className="w-[90%] md:w-full md:max-w-5xl mx-auto sticky top-5 z-20 
             // 🛠️ CORREGIDO: items-center y justify-between
             flex items-center justify-between 
             px-6 py-3 bg-purple-500/30 
             
             // 🛠️ CORREGIDO: backdrop-blur-md y shadow-lg
             backdrop-blur-md rounded-full shadow-lg 
             border border-purple-400/20"> 
            
            <Logo/>
            <NavbarDesktop/>
            <NavbarMobile/>
        </nav>
    )
}