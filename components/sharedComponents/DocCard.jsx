import Link from 'next/link';
import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import DocNameAndRating from "@/components/sharedComponents/DocNameAndRating";

const DocCard = ({name, image, title, rate, docTitle}) => {
    const words = title.split(' ');
    return (
        <Link href={'/'} scroll={false}>
            <Card className="bg-gradient-to-tl from-[--main-color] to-[#2A78BA] p-0 rounded-[30px]">
                <CardContent className={"grid grid-cols-5 p-3 pb-0 gap-3"}>
                    <div className={"col-span-2"}>
                        <Image src={image} alt={`${name}, ${docTitle}, ${title}`} className="object-contain h-full"/>
                    </div>
                    <div className="col-span-3 py-4 flex flex-col justify-between">
                        <div>
                            <p className="text-white text-xl font-bold">
                                {words.length > 1 ? (<>
                                    <span className="text-[--secondary-color] block  whitespace-nowrap">{words[0]} </span>
                                    {title.substring(title.indexOf(' ') + 1)}
                                </>) : (<span className="text-[--secondary-color]">{title}</span>)}
                            </p>
                        </div>
                        <DocNameAndRating name={name} rate={rate} docTitle={docTitle}/>
                    </div>
                </CardContent>
            </Card>
        </Link>
        );
};

export default DocCard;
