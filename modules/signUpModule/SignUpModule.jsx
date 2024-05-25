import Image from "next/image";
import signIn from "@/public/signIn.jpg";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import SignUpData from "@/modules/signUpModule/components/SignUpData";

const SignUpModule = () => {
    return(
        <main className={" sm:h-dvh"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 h-[inherit]"}>
                <SignUpData/>
                <div className={"h-[inherit] hidden md:block relative"}>
                    <Image src={signIn} alt={"signIn"} className={"object-cover w-full h-full"}/>
                </div>
            </div>
        </main>
    )
}

export default SignUpModule;