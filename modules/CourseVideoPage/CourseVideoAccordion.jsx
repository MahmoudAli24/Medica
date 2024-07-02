import { IoIosArrowDown } from "react-icons/io";
import DynamicAccordion from "@/components/sharedComponents/DynamicAccordion";
import { IoChatbubblesSharp } from "react-icons/io5";
import { CgAttachment } from "react-icons/cg";

const CourseVideoAccordion = ({ dict }) => {
    const items = [
        {
            value: "item-1",
            icon: <IoChatbubblesSharp size={29} />,
            iconTrigger: <IconTrigger />,
            title: dict.comments, // Localized title
            content: dict.commentsContent, // Localized content
        },
        {
            value: "item-2",
            icon: <CgAttachment size={29} />,
            iconTrigger: <IconTrigger />,
            title: dict.attachments, // Localized title
            content: dict.attachmentsContent, // Localized content
        },
    ];
    return (
        <section className={"container py-6"}>
            <DynamicAccordion items={items} className={"bg-white border px-4 rounded-2xl mb-3"} />
        </section>
    )
}

const IconTrigger = () => {
    return (
        <span>
            <span className={"w-10 h-10 rounded-full border-2 flex items-center justify-center"}>
                <IoIosArrowDown size={24} />
            </span>
        </span>
    )
}

export default CourseVideoAccordion;
