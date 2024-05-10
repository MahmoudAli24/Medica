import Link from 'next/link'
import Logo from "@/components/sheardCompoents/Logo";
import SelectLang from "@/components/navbar/components/SelectLang";
import NavbarItems from "@/components/navbar/components/NavbarItems";
import NavbarDropdown from "@/components/navbar/components/NavbarDropdown";
import Sidebar from "@/components/navbar/components/Sidebar";

const Navbar = () => {
    return (<nav className="py-4 w-full mx-auto absolute top-0 z-10 h-[100px]">
        <div className={"container flex items-center justify-between"}>
            <div className={"flex items-center gap-[30px]"}>
                <Link href={"/"} aria-label="test"><Logo/></Link>
                <ul className={"hidden items-center text-white gap-[30px] lg:flex"}>
                    <li><NavbarDropdown/></li>
                    <NavbarItems/>
                </ul>
            </div>
            <div className={"hidden items-center text-white gap-[20px] lg:flex"}>
                <SelectLang/>
                <Link className={"capitalize "} href={"/sign-in"}>sign in</Link>
                <Link href={"/"}
                      className={"capitalize px-4 py-2 rounded-sm text-[--main-color] font-bold bg-gradient-to-bl from-[#00F2FE] to-[#31C7FE]"}>sign
                    up</Link>
            </div>
            <div className="lg:hidden">
                <Sidebar/>
            </div>
        </div>
    </nav>);
};

export default Navbar;
