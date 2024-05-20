import BreadcrumbHead from "@/components/BreadcrumbHead/BreadcrumbHead";
import {TypographyH1} from "@/components/typography/TypographyH1";

const CoursesHead = ()=>{
    return(
        <section className={"h-[40dvh] w-dvw head-bg"}>
            <div className={"container flex flex-col justify-end gap-3 h-full py-12"}>
                <BreadcrumbHead/>
                <TypographyH1 className={"font-bold text-white text-2xl mb-5 sm:text-4xl"}>Medical Specialties</TypographyH1>
            </div>
        </section>
    )
}

export default CoursesHead;