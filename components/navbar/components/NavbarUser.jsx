import {Progress} from "@/components/ui/progress";
import Link from "next/link";
import {CiSearch} from "react-icons/ci";
import {BsBell} from "react-icons/bs";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const NavbarUser = ({isBlack}) => {
    return (<div className={"flex items-center gap-3"}>
        <div className={"bg-white px-4 py-2 rounded-full grid grid-cols-3 items-center gap-2"}>
            <p className={"text-gray-400 flex items-center font-bold text-lg"}>
                <span className={"text-black"}>1/</span>
                <span className={"whitespace-nowrap"}>10 Level</span>
            </p>
            <Progress value={20} frontColor={"h-2 bg-[#00F2FE]"} backColor={"h-2 bg-[#CCFDFF]"}/>
            <p className={"text-gray-400 w-fit font-bold text-lg whitespace-nowrap"}>
                <span className={"text-black"}>1/</span>
                <span>10</span> <span className={"text-[--secondary-color]"}>XD</span>
            </p>
        </div>
        <div className={`${isBlack && "text-white"} flex items-center gap-4`}>
            <Link href={"/dashboard/search"}><CiSearch size={32}/></Link>
            <Link href={"/"}><BsBell size={28}/></Link>
            <Link href={"/dashboard"}><Avatar>
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>CN</AvatarFallback>
            </Avatar></Link>
        </div>
    </div>)
}

export default NavbarUser