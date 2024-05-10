import Link from 'next/link';
import Image from 'next/image';
import {Card, CardContent} from "@/components/ui/card";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import {TypographyH3} from "@/components/typography/TypographyH3";
import {DropdownMenuSeparator} from "@/components/ui/dropdown-menu";
import classes from "./FindCard.module.css";

const FindCard = ({image, title, text}) => {
    return (
        <Link href={"/"}>
            <Card>
                <CardContent>
                    <div className={`${classes.cardImage} rounded-t-[20px] overflow-hidden h-[200px] flex items-center justify-center p-6 pb-0`}>
                        <Image src={image} alt={`d`} className={"object-contain h-full z-10"}/>
                    </div>
                    <DropdownMenuSeparator className={"!h-[2px] m-0 p-0"}/>
                    <div className={"p-4 bg-[--main-color] rounded-b-[20px]"}>
                        <TypographyH3 className={"mb-2 font-bold text-xl text-white"}>Physiotherapy - BPT</TypographyH3>
                        <TypographyMuted className={"text-white"}>It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at its layout The point distribution of
                            letters, </TypographyMuted>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default FindCard