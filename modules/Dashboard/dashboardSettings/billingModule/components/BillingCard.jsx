import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import TrueCircleIcon from "@/components/icons/TrueCircleIcon";
import {Button} from "@/components/ui/button";
import {TypographyH2} from "@/components/typography/typographyH2/TypographyH2";
import classes from "./BillingCard.module.css"

const BillingCard = () => {
    return (<Card className={`border border-gray-400 last:bg-[--main-color] last:text-white ${classes.BillingCard}`}>
        <CardHeader>
            <CardTitle className={"font-bold"}>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent className={"p-3"}>
            <div className={"flex items-center gap-3"}>
                <TypographyH2 className={"font-bold"}>$99.<span className={"text-gray-400"}>99</span></TypographyH2>
                <TypographyMuted className={"text-sm"}>/year</TypographyMuted>
            </div>
            <div className={"space-y-3"}>
                {Array.from(Array(3)).map((item, index) => (
                    <div className="flex items-center gap-3" key={index}>
                            <span>
                                <TrueCircleIcon/>
                            </span>
                    <TypographyMuted>Get Enterprise Plan</TypographyMuted>
                </div>))}
            </div>
            <Button className={"bg-[--secondary-color] mt-4 text-lg w-full py-7"} size={"lg"}>Choose Plan</Button>
        </CardContent>
    </Card>)
}

export default BillingCard;