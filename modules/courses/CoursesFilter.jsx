"use client"
import CoursesFilterForm from "@/modules/courses/CoursesFilterForm";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import useMediaQuery from "@/lib/useMediaQuery";

const CoursesFilter = ({dict}) => {
    const isSmallScreen = useMediaQuery(768);
    return (<>
            {isSmallScreen && (<Sheet>
                    <SheetTrigger className={"py-2 px-3 bg-[--main-color] text-white rounded mt-2"}>{dict.coursesPage.Filter}</SheetTrigger>
                    <SheetContent>
                        <CoursesFilterForm dict={dict} />
                    </SheetContent>
                </Sheet>)}
            {!isSmallScreen && <CoursesFilterForm dict={dict} />}
        </>)
}

export default CoursesFilter;