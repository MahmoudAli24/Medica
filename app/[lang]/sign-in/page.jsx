import SignInModule from "@/modules/signInModule/SignInModule";
import {getDictionary} from "@/app/[lang]/dictionaries";


const SignInPage = async ({params:{lang}}) => {
    const dict = await getDictionary(lang)
    return(
        <SignInModule dict={dict}/>
    )
}

export default SignInPage;