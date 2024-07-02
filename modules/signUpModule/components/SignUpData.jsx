import Link from "next/link";
import Logo from "@/components/sharedComponents/Logo";
import {TypographyH2} from "@/components/typography/typographyH2/TypographyH2";
import SignUpForm from "@/modules/signUpModule/components/SignUpForm";
import {TypographyLead} from "@/components/typography/TypographyLead";

const SignUpData = ()=>{
    return(
        <div className={"bg-[--main-color] h-[inherit] container py-8"}>
            <div className={"lg:px-6 flex gap-10 md:gap-16 flex-col"}>
                <div className={"flex justify-between items-center"}>
                    <Link href={"/"}><Logo/></Link>
                    <TypographyLead className={"text-white"}>I have an account? <Link href={"/sign-in"} className={"text-[--secondary-color] underline"}>Login</Link></TypographyLead>
                </div>
                <div>
                    <TypographyH2 className={"text-xl md:text-[30px] mb-3 text-white"}>Completing your registration</TypographyH2>
                    <SignUpForm/>
                </div>
            </div>
        </div>
    )
}

export default SignUpData;