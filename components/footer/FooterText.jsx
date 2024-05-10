import Image from "next/image";
import Link from "next/link";
import LogoWhite from "@/public/Logo-white.svg";
import {TypographyLead} from "@/components/typography/TypographyLead";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import {FaInstagram, FaLinkedinIn, FaTwitter} from "react-icons/fa6";

const FooterText = () => {
    return (<div className={"col-span-12 md:col-span-4"}>
        <div className={"grid grid-cols-3 gap-3 items-center"}>
                <span className={"block w-16 h-16 lg:w-[100px] lg:h-[100px]"}>
                    <Image src={LogoWhite} alt={"Logo"} className={"w-full h-full"}/>
                </span>
            <span className={"col-span-2"}>
                    <TypographyLead className={"text-white text-[16px]"}>We are a professional cleaning company in 1997 and providing leading commercial residential cleaning solutions in the U.S.</TypographyLead>
                </span>
        </div>
        <div className={"mt-3"}>
            <TypographyMuted className={"flex items-center gap-2"}>Follow us : <span className={"flex gap-2 items-center text-white"}><Link href={"/"}><FaTwitter/></Link> <Link
                href={"/"}><FaLinkedinIn/></Link> <Link href={"/"}><FaInstagram/></Link></span></TypographyMuted>
        </div>
    </div>)
}

export default FooterText;
