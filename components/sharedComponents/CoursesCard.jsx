import Image from "next/image";
import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import {TypographyH3} from "@/components/typography/TypographyH3";
import videoIcon from "@/public/VideoLearning.svg"
import certificate from "@/public/quality.svg"
import lang from "@/public/language.svg"
import {FaClock} from "react-icons/fa";
import {TypographyLead} from "@/components/typography/TypographyLead";
import DocNameAndRating from "@/components/sharedComponents/DocNameAndRating";

const CourseCard = ({item}) => {
    const encodedTitle = item.title.replace(/\s+/g, "-");
    return(
        <Card className={"shadow-lg"}>
            <Link href={`/courses/${encodedTitle}`}>
                <CardContent className={"p-3 pb-0 relative"}>
                    <div className={"flex flex-col-reverse lg:grid lg:grid-cols-3"}>
                        <div className={"flex items-center justify-center lg:flex-col lg:justify-end"}>
                            <Image src={item.image} alt={item.title} className={"object-fill"} />
                        </div>
                        <div className={"flex flex-col justify-between gap-4 lg:col-span-2"}>
                            <TypographyMuted>{item["lastUpdate"]}</TypographyMuted>
                            <TypographyH3 className={"text-[--main-color] font-bold"}>{item.title}</TypographyH3>
                            <div className={"flex items-center justify-between flex-wrap"}>
                            <span className={"flex flex-col items-center"}>
                                <Image src={videoIcon} width={30} height={20} alt={item.lecturesCount} />
                                <span className={"text-nowrap text-[12px]"}>{item.lecturesCount} lectures</span>
                            </span>
                                <span className={"flex flex-col items-center"}>
                                <FaClock size={23} />
                                <span className={"text-nowrap text-[12px]"}>{item.time}</span>
                            </span>
                                {item.isCertificate &&
                                    <span className={"flex flex-col items-center"}>
                                    <Image src={certificate} alt={"certificate"}/>
                                    <span className={"text-nowrap text-[12px]"}>
                                        Certificate of Completion
                                    </span>
                                </span>
                                }
                                <span className={"flex flex-col items-center"}>
                                <Image src={lang} alt={"language"}/>
                                    <span className={"text-nowrap text-[12px]"}>
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
                    <span className={"absolute top-0 end-0 rounded-bl-[20px] rounded-tr-[20px] bg-[#12193E] text-white font-bold py-3 px-2 text-xl"}>EGP {item.price}</span>
                </CardContent>
            </Link>
        </Card>
    )
}

export default CourseCard;