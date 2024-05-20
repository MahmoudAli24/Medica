'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Logo from "@/components/sharedComponents/Logo";
import SelectLang from "@/components/navbar/components/SelectLang";
import NavbarItems from "@/components/navbar/components/NavbarItems";
import NavbarDropdown from "@/components/navbar/components/NavbarDropdown";
import Sidebar from "@/components/navbar/components/Sidebar";
import NavbarUser from "@/components/navbar/components/NavbarUser";

const Navbar = () => {
    const isLogin = true
    const pathname = usePathname()
    const isCoursePage = pathname.match(/^\/courses\/[^\/]+\/.*/);

    if (isCoursePage) {
        return null; // Do not render the Navbar on course pages
    }
    if(pathname.includes("dashboard")){
        return null;
    }

    return (<nav className="py-4 w-full mx-auto absolute top-0 z-10 h-[100px]">
        <div className={"container flex items-center justify-between"}>
            <div className={"flex items-center gap-[30px]"}>
                <Link href={"/"} aria-label="test"><Logo/></Link>
                <ul className={"hidden items-center text-white gap-[30px] lg:flex"}>
                    <li><NavbarDropdown/></li>
                    <NavbarItems/>
                </ul>
            </div>
            {
                !isLogin ? <div className={"hidden items-center text-white gap-[20px] lg:flex"}>
                    <SelectLang/>
                    <Link className={"capitalize "} href={"/sign-in"}>sign in</Link>
                    <Link href={"/"}
                          className={"capitalize px-4 py-2 rounded-sm text-[--main-color] font-bold bg-gradient-to-bl from-[#00F2FE] to-[#31C7FE]"}>sign
                        up</Link>
                </div>
                    : <div className={"hidden lg:block"}><NavbarUser isBlack={true}/></div>
            }
            <div className="lg:hidden">
                <Sidebar/>
            </div>
        </div>
    </nav>);
};

export default Navbar;
