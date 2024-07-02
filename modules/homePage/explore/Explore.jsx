import { TypographyH1 } from "@/components/typography/TypographyH1";
import ExploreTabs from "@/modules/homePage/explore/ExploreTabs";

const Explore = ({ dict }) => {
    return(
        <section className={"container pt-20 pb-16"}>
            <TypographyH1 className={"text-center font-[400] text-[--main-color]"}>
                {dict.taxingLaughter}
            </TypographyH1>
            <ExploreTabs dict={dict} />
        </section>
    )
}

export default Explore;
