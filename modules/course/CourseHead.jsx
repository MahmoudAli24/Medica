import BreadcrumbHead from "@/components/BreadcrumbHead/BreadcrumbHead";
import {TypographyH1} from "@/components/typography/TypographyH1";

const CourseHead = () => {
    return(
        <header className={"head-bg h-[calc(100dvh-91px)]"}>
            <div className={"container pt-[140px]"}>
                <BreadcrumbHead/>
                <div></div>
            </div>
        </header>
    )
}

export default CourseHead