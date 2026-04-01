import { NavigationMenu } from "@/components/ui/navigation-menu";
import Image from "next/image"; 
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-[#001F3F]/10 px-4 md:px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={40} 
          height={40} 
          className="object-contain drop-shadow-sm"
          priority 
        />
        <span className="font-bold uppercase tracking-tighter text-lg text-[#001F3F] dark:text-blue-400">
          MY PORTFOLIO
        </span>
      </div>
      <NavigationMenu>
        <nav className="hidden md:flex items-center gap-10">
          {["Home", "About", "Project", "Contact"].map((item) => (
            <div key={item} className="relative group">
              <a 
                href={`/#${item.toLowerCase()}`} 
                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-[#001F3F]"
              >
                {item}
              </a>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#001F3F] transition-all group-hover:w-full" />
            </div>
          ))}
        </nav>
      </NavigationMenu>
    </header>
  );
}