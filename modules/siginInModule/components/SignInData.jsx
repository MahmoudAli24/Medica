import Logo from "@/components/sharedComponents/Logo";
import Link from "next/link";
import {TypographyH2} from "@/components/typography/typographyH2/TypographyH2";
import {TypographyLead} from "@/components/typography/TypographyLead";
import {buttonVariants} from "@/components/ui/button";
import {IoLogoFacebook, IoLogoGoogleplus} from "react-icons/io";
import {FaTwitterSquare} from "react-icons/fa";
import SignInForm from "@/modules/siginInModule/components/SignInForm";

const SignInData = () => {
    return (
        <div className={"bg-[--main-color] h-[inherit] container py-8"}>
            <div className={"lg:px-6 flex gap-16 flex-col"}>
                <div>
                    <Link href={"/"}><Logo/></Link>
                </div>
                <div>
                    <TypographyH2 className={"text-xl md:text-[30px] mb-3 text-white"}>Login to Your
                        Profile</TypographyH2>
                    <div className={"py-4 border-white/20 border-y flex flex-col gap-4"}>
                        <TypographyLead className={"text-white"}>You can log in with:</TypographyLead>
                        <div className={"grid grid-cols-1 sm:grid-cols-3 items-center gap-3"}>
                            <Link className={`${buttonVariants({variant: "default"})} bg-[#EA4235]`} href={"/"}>
                                <span><IoLogoGoogleplus size={24} className={"me-2"}/></span>
                                <span>Google account</span>
                            </Link>
                            <Link className={`${buttonVariants({variant: "default"})} bg-[#00BFFF]`} href={"/"}>
                                <span><FaTwitterSquare size={24} className={"me-2"}/></span> <span>Google account</span>
                            </Link>
                            <Link className={`${buttonVariants({variant: "default"})} bg-[#0062A5]`} href={"/"}>
                                <span><IoLogoFacebook size={24} className={"me-2"}/> </span> <span>Google account</span>
                            </Link>
                        </div>
                    </div>
                    <div className={"py-4 space-y-3"}>
                        <TypographyLead className={"text-white"}>Or you can login with your email</TypographyLead>
                        <SignInForm/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignInData;