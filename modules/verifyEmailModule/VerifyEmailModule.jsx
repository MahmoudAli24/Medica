import Link from "next/link";
import Logo from "@/components/sharedComponents/Logo";
import {TypographyH2} from "@/components/typography/typographyH2/TypographyH2";
import Image from "next/image";
import signIn from "@/public/signIn.jpg";
import {buttonVariants} from "@/components/ui/button";
import SubmitVerify from "@/modules/verifyEmailModule/components/SubmitVerify";

const VerifyEmailModule = ({dict})=>{
    return(
        <>
            <main className={"test sm:h-dvh"}>
                <div className={"grid grid-cols-1 md:grid-cols-2 h-[inherit]"}>
                    <div className={"bg-[--main-color] h-[inherit] container py-8"}>
                        <div className={"lg:px-6 flex gap-16 flex-col"}>
                            <div>
                                <Link href={"/"}><Logo/></Link>
                            </div>
                            <div>
                                <TypographyH2 className={"text-xl md:text-[30px] mb-3 text-white"}>
                                    {dict.VerifyYourEmail}
                                </TypographyH2>
                            </div>
                        </div>
                        <SubmitVerify/>
                    </div>
                    <div className={"h-[inherit] hidden md:block relative"}>
                        <Image src={signIn} alt={dict.signInImageAlt} className={"object-cover w-full h-full"}/>
                        <Link
                            className={`${buttonVariants({
                                variant: "default", size: "lg"
                            })} !font-bold !bg-gradient-to-tr from-[#31C7FE] to-[#00F2FE] !text-[--main-color] absolute top-16 end-16`}
                            href={"/sign-up"}
                        >
                            {dict.signUp}
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export default VerifyEmailModule;