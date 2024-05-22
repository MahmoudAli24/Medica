"use client"
import CoursesFilterForm from "@/modules/courses/CoursesFilterForm";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import useMediaQuery from "@/lib/useMediaQuery";

const CoursesFilter = () => {
    const isSmallScreen = useMediaQuery(768);
    return (<>
            {isSmallScreen && (<Sheet>
                    <SheetTrigger className={"py-2 px-3 bg-[--main-color] text-white rounded mt-2"}>Filter</SheetTrigger>
                    <SheetContent>
                        <CoursesFilterForm/>
                    </SheetContent>
                </Sheet>)}
            {!isSmallScreen && <CoursesFilterForm/>}
        </>)
}

export default CoursesFilter;