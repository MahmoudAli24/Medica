"use client"
import dynamic from "next/dynamic";
import useMediaQuery from "@/lib/useMediaQuery";

const SidebarContent = dynamic(() => import("@/components/sidebar/SidebarContent"))


const Sidebar = () => {
    const isSmall = useMediaQuery(768);
    return (
        <>
            {
                !isSmall ? <SidebarContent/> :null
            }
        </>
    )
}

export default Sidebar;