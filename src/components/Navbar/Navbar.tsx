"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CiMenuBurger } from "react-icons/ci";


const Navbar = () => {
    const links = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Resume", path: "/resume" },
        { name: "Contact", path: "/contact" }
    ]

    const pathName = usePathname();

    return (
        <nav className="flex justify-between items-center py-5 container mx-auto">
            <Link className="text-4xl font-bold" href={"/"}>Md<span className="text-5xl font-bold text-orange-600">.</span> Tanim</Link>
            <div className="hidden md:flex">
                {links.map((link) => (
                    <Link className={`mr-4 text-xl ${pathName == link.path && 'text-orange-600 border-b-2 pb-1'}`} href={link.path} key={link.path}>
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger><CiMenuBurger /></SheetTrigger>
                    <SheetContent>
                        <SheetHeader className="text-center">
                            {links.map((link) => (
                                <Link className={`mr-4 text-xl ${pathName == link.path && 'text-orange-600 border-b-2 pb-1'}`} href={link.path} key={link.path}>
                                    {link.name}
                                </Link>
                            ))}
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

        </nav>
    );
};

export default Navbar;