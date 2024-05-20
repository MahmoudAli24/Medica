import {TypographyH2} from "@/components/typography/typographyH2/TypographyH2";
import CourseMayLikeSlider from "@/modules/course/components/CourseMayLikeSlider";

const CourseMayLike = (props) => {
    return(
        <section className={"py-12 container"}>
            <div className={"grid grid-cols-1 md:grid-cols-4 items-center"}>
                    <div>
                        <TypographyH2 className={"text-xl leading-none text-[--main-color] text-center"}>Courses You <br/> <span className={"text-[--secondary-color] block mt-3"}>May Like</span></TypographyH2>
                    </div>
                    <div className={"col-span-3"}>
                        <CourseMayLikeSlider/>
                    </div>
            </div>
        </section>
    )
}

export default CourseMayLike;