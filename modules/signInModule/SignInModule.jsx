import Link from "next/link";
import dynamic from "next/dynamic";

const SignInData = dynamic(()=>(import("@/modules/signInModule/components/SignInData")));
import Image from "next/image";
import signIn from "@/public/signIn.jpg"
import {buttonVariants} from "@/components/ui/button";

const SignInModule = ()=> {
    return (
        <main className={" sm:h-dvh"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 h-[inherit]"}>
                <SignInData/>
                <div className={"h-[inherit] hidden md:block relative"}>
                    <Image src={signIn} alt={"signIn"} className={"object-cover w-full h-full"} />
                    <Link className={`${buttonVariants({variant: "default" , size :"lg"})} !font-bold !bg-gradient-to-tr from-[#31C7FE] to-[#00F2FE] !text-[--main-color] absolute top-16 end-16`} href={"/sign-up"}>
                        Sign Up
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default SignInModule