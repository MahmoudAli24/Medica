'use client';
import React from "react";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Logo from "@/components/sharedComponents/Logo";
import SelectLang from "@/components/navbar/components/SelectLang";
import NavbarItems from "@/components/navbar/components/NavbarItems";
import NavbarDropdown from "@/components/navbar/components/NavbarDropdown";
import Sidebar from "@/components/navbar/components/Sidebar";
import NavbarUser from "@/components/navbar/components/NavbarUser";

const Navbar = ({lang ,dict}) => {
    const isLogin = true;
    const pathname = usePathname();
    const isCoursePage = pathname.match(/^\/ar\/courses\/[^\/]+\/[^\/]+$/);

    if (isCoursePage) {
        return null; // Do not render the Navbar on course pages
    }
    if (pathname.includes("dashboard") || pathname.includes("sign-in") || pathname.includes("sign-up") || pathname.includes("verify-email")) {
        return null;
    }

    return (
        <nav className="py-4 w-full mx-auto absolute top-0 z-10 h-[100px]">
            <div className={"container flex items-center justify-between"}>
                <div className={"flex items-center gap-[30px]"}>
                    <Link href={`/`} aria-label="test"><Logo /></Link>
                    <ul className={"hidden items-center text-white gap-[30px] lg:flex"}>
                        <li><NavbarDropdown /></li>
                        <NavbarItems dict={dict} />
                    </ul>
                </div>
                {!isLogin ? (
                    <div className={"hidden items-center text-white gap-[20px] lg:flex"}>
                        <SelectLang />
                        <Link className={"capitalize"} href={`/sign-in`}>{dict.signIn}</Link>
                        <Link href={`/sign-up`}
                              className={"capitalize px-4 py-2 rounded-sm text-[--main-color] font-bold bg-gradient-to-bl from-[#00F2FE] to-[#31C7FE]"}>
                            {dict.signUp}
                        </Link>
                    </div>
                ) : (
                    <div className={"hidden lg:block"}><NavbarUser isBlack={true} /></div>
                )}
                <div className="lg:hidden">
                    <Sidebar dict={dict} lang={lang} />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
