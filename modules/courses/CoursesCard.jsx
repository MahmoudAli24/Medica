import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import {TypographyH3} from "@/components/typography/TypographyH3";
import videoIcon from  "@/public/VideoLearning.svg"
import certificate from  "@/public/quality.svg"
import lang from  "@/public/language.svg"
import {FaClock} from "react-icons/fa";
import {TypographyLead} from "@/components/typography/TypographyLead";
import DocNameAndRating from "@/components/sheardCompoents/DocNameAndRating";

const CourseCard = ({item}) => {
    return(
        <Card>
            <CardContent className={"p-3 pb-0"}>
                <div className={"grid grid-cols-3"}>
                    <div className={"flex flex-col justify-end"}>
                        <Image src={item.image} alt={item.title} className={"object-fill"} />
                    </div>
                    <div className={"col-span-2 flex flex-col justify-between gap-4"}>
                        <TypographyMuted>{item["lastUpdate"]}</TypographyMuted>
                        <TypographyH3 className={"text-[--main-color] font-bold"}>{item.title}</TypographyH3>
                        <div className={"grid grid-cols-3"}>
                            <span className={"flex flex-col items-center"}>
                                <Image src={videoIcon} width={30} height={20} alt={item.lecturesCount} />
                                <span className={"text-nowrap text-[14px]"}>{item.lecturesCount} lectures</span>
                            </span>
                            <span className={"flex flex-col items-center"}>
                                <FaClock size={23} />
                                <span className={"text-nowrap text-[14px]"}>{item.time}</span>
                            </span>
                            {item.isCertificate &&
                                <span className={"flex flex-col items-center"}>
                                    <Image src={certificate} alt={"certificate"}/>
                                    <span className={"text-nowrap text-[14px]"}>
                                        Certificate of Completion
                                    </span>
                                </span>
                            }
                            <span className={"flex flex-col items-center"}>
                                <Image src={lang} alt={"language"}/>
                                    <span className={"text-nowrap text-[14px]"}>
                                        Certificate of Completion
                                    </span>
                            </span>
                        </div>
                        <TypographyLead>
                            {item.description}
                        </TypographyLead>
                        <DocNameAndRating pClassName={"text-[#BECBE1]"} className={"text-[--main-color]"} name={item.docName} docTitle={item.docTitle} rate={item.courseRate}/>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CourseCard;