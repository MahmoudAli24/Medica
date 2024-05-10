import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {FaBars} from "react-icons/fa";
import SelectLang from "@/components/navbar/components/SelectLang";
import Link from "next/link";
import NavbarItems from "@/components/navbar/components/NavbarItems";

const Sidebar = ()=>{
    return(
        <Sheet>
            <SheetTrigger className={"text-white"} aria-label="Name"><FaBars size={30} /></SheetTrigger>
            <SheetContent>
                <div className={"flex items-center justify-between mt-4"}>
                    <SelectLang/>
                    <Link className={"capitalize "} href={"/sign-in"}>sign in</Link>
                    <Link href={"/"}
                          className={"capitalize px-4 py-2 rounded-sm text-[--main-color] font-bold bg-gradient-to-bl from-[#00F2FE] to-[#31C7FE]"}>sign
                        up</Link>
                </div>
                <ul className={"mt-5 flex flex-col gap-4"}>
                    <NavbarItems/>
                </ul>
            </SheetContent>
        </Sheet>

    )
}

export default Sidebar