import {TypographyH1} from "@/components/typography/TypographyH1";
import ExploreTabs from "@/modules/homePage/explore/ExploreTabs";

const Explore = ()=>{
    return(
        <section className={"container pt-20 pb-16"}>
            <TypographyH1 className={"text-center font-[400] text-[--main-color]"}>Taxing Laughter: The Joke Tax Chronicles</TypographyH1>
            <ExploreTabs/>
        </section>
    )
}

export default Explore;