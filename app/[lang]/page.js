import HomePage from "@/modules/homePage/HomePage";
import {getDictionary} from "@/app/[lang]/dictionaries";

export default async function Home({ params: { lang } }) {
    const dict = await getDictionary(lang);
    return <HomePage lang={lang} dict={dict} />;
}
