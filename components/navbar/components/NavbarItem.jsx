import Link from "next/link";
const NavbarItem = ({title ,link}) => {
    return (
        <li>
            <Link className="capitalize" href={`${link}`}>{title}</Link>
        </li>
    )
}

export default NavbarItem