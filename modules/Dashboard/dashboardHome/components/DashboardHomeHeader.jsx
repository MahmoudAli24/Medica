"use client"
import {TypographyH3} from "@/components/typography/TypographyH3";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import time from "@/public/icons/time.svg"
import Image from "next/image";
import NavbarUser from "@/components/navbar/components/NavbarUser";
import useMediaQuery from "@/lib/useMediaQuery";
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet";
import {FaBars} from "react-icons/fa";
import SidebarContent from "@/components/sidebar/SidebarContent";

const DashboardHomeHeader = ({dict}) => {
    const isSmall = useMediaQuery(768)
    return (
        <section className={"border-b-2 pb-5"}>
            <div className={"flex items-center justify-between"}>
                <div className={"mb-2"}>
                    <TypographyH3 className={"font-normal"}>
                        {dict.dashboardHomeHeader.welcomeBack}, <span
                        className={"font-bold"}>{dict.dashboardHomeHeader.userName}!</span>
                    </TypographyH3>
                    <TypographyMuted>
                        {dict.dashboardHomeHeader.subtitle}
                    </TypographyMuted>
                </div>
                {!isSmall ? <NavbarUser/> : <Sheet>
                    <SheetTrigger><FaBars size={28}/></SheetTrigger>
                    <SheetContent>
                        <SidebarContent/>
                    </SheetContent>
                </Sheet>}
            </div>
            <TypographyMuted className={"text-black mb-3"}>{dict.dashboardHomeHeader.overview}</TypographyMuted>
            <div className={"flex items-center justify-between flex-wrap gap-y-4"}>
                {[...Array(4)].map((_, index) => (
                    <div key={index} className={"flex gap-3"}>
                        <span className={"flex items-center justify-center w-16 h-16 bg-gray-200"}>
                            <Image src={time} alt={dict.dashboardHomeHeader.timeAlt}/>
                        </span>
                        <span className={"flex flex-col justify-between"}>
                            <p>{dict.dashboardHomeHeader.hoursSpent}</p>
                            <p className={"text-xl text-gray-400"}>
                                <span className={"text-[40px] font-semibold text-[--secondary-color]"}>12</span>h
                            </p>
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default DashboardHomeHeader;