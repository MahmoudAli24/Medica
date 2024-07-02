import { getDictionary } from "@/app/[lang]/dictionaries";
import VerifyEmailModule from "@/modules/verifyEmailModule/verifyEmailModule";

export const metadata = {
    title: 'Verify Your Email',
    description: 'Please verify your email address to complete the registration process and gain access to all features.',
}

const verifyEmail = async ({ params: { lang } }) => {
    const dict = await getDictionary(lang)
    return <VerifyEmailModule dict={dict} />
}

export default verifyEmail
