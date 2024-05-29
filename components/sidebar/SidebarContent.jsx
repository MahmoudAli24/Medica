"use client"
import Image from "next/image";
import dashboardLogo from "@/public/icons/dashboardLogo.svg";
import SidebarItem from "@/components/sidebar/SidebarItem";
import SettingsIcon from "@/components/icons/SettingsIcon";
import SupportIcon from "@/components/icons/SupportIcon";
import QuestionIcon from "@/components/icons/QuestionIcon";
import {usePathname} from "next/navigation";
import HomeIcon from "@/components/icons/HomeIcon";
import CoursesDashboardIcon from "@/components/icons/CoursesDashboardIcon";
import UpcomingIcon from "@/components/icons/UpcomingIcon";
import CareerTracksIcon from "@/components/icons/CareerTracksIcon";
import ExamsIcon from "@/components/icons/ExamsIcon";

const SidebarContent = () => {
    const pathname = usePathname()
    const sidebarItems = [{icon: <HomeIcon/>, href: "/dashboard"},
        {
            icon: <CoursesDashboardIcon/>, href: "/dashboard/courses",
        },
        {
            icon: <UpcomingIcon/>, href: "/dashboard/upcoming-courses"
        },
        {
            icon: <CareerTracksIcon/>, href: "/dashboard/career-tracks",
        },
        {
            icon: <ExamsIcon/>, href: "/dashboard/exams",
        }
    ];
    return (
        <div
            className="mt-14 mb-10 h-[calc(100dvh-96px)] px-2 py-2 bg-white flex flex-col items-center justify-between rounded-3xl">
            <div className={"w-full flex flex-col items-center gap-6"}>
                <div>
                    <Image src={dashboardLogo} alt="logo" className={"object-cover"}/>
                </div>
                <ul className={"space-y-5"}>
                    {sidebarItems.map((item, index) => (
                        <SidebarItem key={index} isActive={pathname === item.href} href={item.href}>
                            {item.icon}
                        </SidebarItem>))}
                </ul>
            </div>
            <div>
                <ul className={"space-y-3"}>

                    <SidebarItem isActive={pathname === "/dashboard/support"} href={"/dashboard/support"}>
                        <SupportIcon/>
                    </SidebarItem>
                    <SidebarItem isActive={pathname === "/dashboard/question"} href={"/dashboard/question"}>
                        <QuestionIcon/>
                    </SidebarItem>
                    <SidebarItem isActive={pathname === "/dashboard/settings"} href={"/dashboard/settings"}>
                        <SettingsIcon/>
                    </SidebarItem>
                </ul>
            </div>
        </div>
    )
}

export default SidebarContent