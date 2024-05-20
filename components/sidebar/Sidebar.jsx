"use client"
import dynamic from "next/dynamic";
import {useCallback, useEffect, useState} from "react";
import {SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger , Sheet} from "@/components/ui/sheet";

const SidebarContent = dynamic(() => import("@/components/sidebar/SidebarContent"))


const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`);
        if (media.addEventListener) {
            media.addEventListener("change", updateTarget);
        } else {
            // compatibility for browser that dont have addEventListener
            media.addListener(updateTarget);
        }
        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true);
        }
        if (media.removeEventListener) {
            return () => media.removeEventListener('change', updateTarget);
        } else {
            // compatibility for browser that dont have removeEventListener
            return () => media.removeListener(updateTarget);
        }
    }, []);

    return targetReached;
};

const Sidebar = () => {
    const isSmall = useMediaQuery(768);
    console.log("isSmall", isSmall);
    return (
        <>
            {
                !isSmall ? <SidebarContent/> :null
            }
        </>
    )
}

export default Sidebar;