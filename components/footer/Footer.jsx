"use client"
import { usePathname } from 'next/navigation'
import Link from "next/link";
import FooterText from "@/components/footer/FooterText";
import FooterCols from "@/components/footer/FooterCols";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { TypographyMuted } from "@/components/typography/TypographyMuted";

const Footer = ({ dict }) => {
    const pathname = usePathname();
    const isDashboard = pathname.includes("dashboard")

    if (isDashboard) {
        return null; // Do not render the Navbar on course pages
    }
    if (pathname.includes("sign-in") || pathname.includes("sign-up" )|| pathname.includes("verify-email")) {
        return null;
    }
    return (
        <footer className={"py-8 pb-3 bg-[--main-color]"}>
            <div className={"container grid grid-cols-12 gap-4"}>
                <FooterText dict={dict} />
                <FooterCols dict={dict} />
            </div>
            <div className={"container mt-3"}>
                <DropdownMenuSeparator className={"m-0 p-0 bg-white"} />
                <div className={"mt-2 flex justify-between items-center flex-wrap"}>
                    <TypographyMuted className={"text-white"}>© 2023 {dict.footer.medica} {dict.footer.copyrightsReserved}</TypographyMuted>
                    <div className={"text-14px flex gap-4 text-white text-[13px] flex-wrap font-thin mt-3 sm:mt-0"}>
                        <Link href={"/"}>{dict.footer.termsAndConditions}</Link>
                        <Link href={"/"}>{dict.footer.privacyPolicy}</Link>
                        <Link href={"/"}>{dict.footer.cookiesPolicy}</Link>
                        <Link href={"/"}>{dict.footer.copyrightNotification}</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
