"use client"
import NavbarUser from "@/components/navbar/components/NavbarUser";
import useMediaQuery from "@/lib/useMediaQuery";
import {SheetContent, SheetTrigger, Sheet, SheetDescription} from "@/components/ui/sheet";
import {FaBars} from "react-icons/fa";
import SidebarContent from "@/components/sidebar/SidebarContent";

const NavbarDashboard = ({children}) => {
    const isSmall = useMediaQuery(768)
    return(
        <nav className={"flex items-center justify-between flex-wrap pb-3"}>
            <div>{children}</div>
            {
                !isSmall ? <div className={"ms-auto"}><NavbarUser/></div> : <Sheet>
                    <SheetTrigger><FaBars size={28} /></SheetTrigger>
                    <SheetContent>
                            <SidebarContent/>
                    </SheetContent>
                </Sheet>

            }
        </nav>
    )
}

export default NavbarDashboard;