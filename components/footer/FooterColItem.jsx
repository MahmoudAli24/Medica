import Link from "next/link";
const FooterColItem = ({item}) => {
    return(
        <li className={"capitalize text-[#BDC2D8] text-[14px]"}>
            <Link href={item.link} passHref>- {item.name}</Link>
        </li>
    )
}

export default FooterColItem;