import "./SidebarItem.css"
import Link from 'next/link';
const SidebarItem = ({href , isActive , children}) => {
    return(
        <li className={"flex items-center justify-center"}>
            <Link href={href} className={`text-white p-3 flex items-center justify-center rounded-2xl ${isActive && "active"}`}>
                <span className={"inline-block h-6 w-6"}>{children}</span>
            </Link>
        </li>
    )
}

export default SidebarItem;