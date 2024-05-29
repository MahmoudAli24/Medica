"use client"
import Link from "next/link";
import {usePathname} from 'next/navigation'
import {LiaUserCircleSolid} from "react-icons/lia";
import {cn} from "@/lib/utils";
import {TbReportMoney} from "react-icons/tb";
import {HiOutlineBellAlert} from "react-icons/hi2";
import {CiLock} from "react-icons/ci";

const SettingsNavigation = () => {
    const pathname = usePathname();
    const activeClasses = "bg-[#31C7FE]/10 text-[--secondary-color] font-bold p-3 rounded";
    const inActiveClasses = "text-gray-500 font-normal p-3 rounded"
    return (<div className={"flex flex-wrap border-b-2 items-center shadow-md md:items-start md:shadow-none md:border-none md:flex-col gap-3 w-full"}>
        <Link href={"/dashboard/settings/account-information"}
              className={cn(pathname === "/dashboard/settings/account-information" ? activeClasses : inActiveClasses, "flex gap-2")}>
            <span><LiaUserCircleSolid size={24}/></span><span>Account Information</span></Link>
        <Link href={"/dashboard/settings/billing"}
              className={cn(pathname === "/dashboard/settings/billing" ? activeClasses : inActiveClasses, "flex gap-2")}>
            <span><TbReportMoney size={24}/></span>
            <span>Billing</span>
        </Link>
        <Link href={"/dashboard/settings/notifications"}
              className={cn(pathname === "/dashboard/settings/notifications" ? activeClasses : inActiveClasses, "flex gap-2")}>
            <span><HiOutlineBellAlert size={24}/></span>
            <span>Notifications</span>
        </Link>
        <Link href={"/dashboard/settings/security"}
              className={cn(pathname === "/dashboard/settings/security" ? activeClasses : inActiveClasses, "flex gap-2")}>
            <span><CiLock size={24}/></span>
            <span>Security</span>
        </Link>
    </div>)
}

export default SettingsNavigation