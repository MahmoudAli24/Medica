import dynamic from "next/dynamic";
import {TypographyH3} from "@/components/typography/TypographyH3";
import {TypographyMuted} from "@/components/typography/TypographyMuted";
import NavbarDashboard from "@/components/navbarDashboard/NavbarDashboard";
import {Card, CardContent} from "@/components/ui/card";
import {TypographyH2} from "@/components/typography/typographyH2/TypographyH2";
import {ScrollArea} from "@/components/ui/scroll-area";

const SettingsNavigation = dynamic(() => (import("@/modules/Dashboard/dashboardSettings/components/SettingsNavigation")));


export default function DashboardLayout({children}) {
    return (
        <div className={"col-span-12 md:col-span-11 mt-14 w-full"}>
            <NavbarDashboard>
                <TypographyH3 className={"font-bold"}>My Profile</TypographyH3>
                <TypographyMuted>Standard dummy text ever since the 1500s.</TypographyMuted>
            </NavbarDashboard>
            <Card>
                <CardContent className={"pb-0 p-2 md:p-6"}>
                    <div className={"border-b border-gray-200"}>
                        <TypographyH2 className={"text-[--main-color] font-bold py-3"}>
                            Settings
                        </TypographyH2>
                    </div>
                    <div>
                        <div defaultValue="account" className={"grid grid-cols-1 md:grid-cols-12 gap-4 pt-3"}>
                            <div className={"md:col-span-3"}>
                                <SettingsNavigation/>
                            </div>
                            <div className={"md:col-span-9"}>
                                <ScrollArea className={`h-[calc(100dvh-288px)]`}>
                                    {children}
                                </ScrollArea>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}