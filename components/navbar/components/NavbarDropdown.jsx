import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {IoIosArrowDown} from "react-icons/io";

const NavbarDropdown = ()=>{
    return(
        <DropdownMenu>
            <DropdownMenuTrigger
                className={"py-1 px-2 bg-white/10 rounded-md flex items-center gap-1"}>Browse <IoIosArrowDown
                size={20}/></DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default NavbarDropdown