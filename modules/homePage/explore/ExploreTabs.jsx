import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocCard from "@/components/sharedComponents/DocCard";
import doctorImage from "@/public/cropped-portrait-senior-man-glasses-teacher-professor-posing-isolated-gray-background.svg";
import {memo} from "react";
import Link from "next/link";
import {MdOutlineKeyboardDoubleArrowRight} from "react-icons/md";

const ExploreTabs = () => {
    const tabs = [
        {
            value: 'CS',
            label: 'Computer Science',
            content: Array.from({ length: 6 }, (_, index) => ({
                name: `Doctor ${index + 1}`,
                image: doctorImage,
                title: `Title ${index + 1}`,
                rate: Math.floor(Math.random() * 5) + 1, // Random rate between 1 and 5
                docTitle: `Professor ${index + 1}`
            }))
        },
        {
            value: "MD",
            label: "Doctor of Medicine - MD",
            content: Array.from({ length: 6 }, (_, index) => ({
                name: `Doctor ${index + 1}`,
                image: doctorImage,
                title: `Title ${index + 1}`,
                rate: Math.floor(Math.random() * 5) + 1, // Random rate between 1 and 5
                docTitle: `Professor ${index + 1}`
            }))
        }
    ];


    return (
        <>
            <Tabs defaultValue="CS" className="mx-auto mt-8">
                <TabsList className={"flex justify-center"}>
                    {tabs.map((tab) => (
                        <TabsTrigger key={tab.value} value={tab.value}>
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                {tabs.map((tab) => (
                    <TabsContent key={tab.value} value={tab.value} className={"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"}>
                        {tab.content.map((doctor, index) => (
                            <DocCard key={index} docTitle={doctor.docTitle} title={doctor.title} name={doctor.name} image={doctor.image} rate={doctor.rate} />
                        ))}
                    </TabsContent>
                ))}
            </Tabs>
            <Link href={"/courses"} className={"capitalize inline-flex justify-center items-center gap-1 w-full text-[--main-color] text-center mt-2"}>See More <MdOutlineKeyboardDoubleArrowRight size={18} /></Link>
        </>
    );
};

export default memo(ExploreTabs);
