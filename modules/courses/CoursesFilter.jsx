"use client"
import {useEffect, useState} from "react";
import CoursesFilterForm from "@/modules/courses/CoursesFilterForm";
import {useWindowWidth} from "@react-hook/window-size";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";

const CoursesFilter = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const windowWidth = useWindowWidth();
    const isSmallScreen = windowWidth < 768;
    return (<>
            {isSmallScreen && isClient && (<Sheet>
                    <SheetTrigger className={"py-2 px-3 bg-[--main-color] text-white rounded mt-2"}>Filter</SheetTrigger>
                    <SheetContent>
                        <CoursesFilterForm/>
                    </SheetContent>
                </Sheet>)}
            {!isSmallScreen && isClient && <CoursesFilterForm/>}
        </>)
}

export default CoursesFilter;