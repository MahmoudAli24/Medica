import SignInData from "@/modules/siginInModule/components/SignInData";
import Image from "next/image";
import signIn from "@/public/signIn.jpg"

const SignInModule = ()=> {
    return (
        <main className={" sm:h-dvh"}>
            <div className={"grid grid-cols-1 md:grid-cols-2 h-[inherit]"}>
                <SignInData/>
                <div className={"h-[inherit] hidden md:block"}>
                    <Image src={signIn} alt={"signIn"} className={"object-cover w-full h-full"} />
                </div>
            </div>
        </main>
    )
}

export default SignInModule