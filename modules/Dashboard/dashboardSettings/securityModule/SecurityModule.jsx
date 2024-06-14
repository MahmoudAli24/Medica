import SettingsHeader from "@/modules/Dashboard/dashboardSettings/components/SettingsHeader";
import {Card, CardContent, CardHeader} from "@/components/ui/card";
import {TypographyH3} from "@/components/typography/TypographyH3";
import ButtonBorder from "@/modules/Dashboard/dashboardSettings/components/ButtonBorder";
import {FaSave} from "react-icons/fa";
import CreateNewPasswordForm
    from "@/modules/Dashboard/dashboardSettings/securityModule/components/CreateNewPasswordForm";

const   SecurityModule =()=>{
    return(
        <>
            <SettingsHeader className={"border-b mb-3"}>Security</SettingsHeader>
            <Card>
                <CardHeader className={"flex flex-row items-center justify-between"}>
                        <TypographyH3 className={"font-[400]"}>Create a new password</TypographyH3>
                </CardHeader>
                <CardContent>
                    <CreateNewPasswordForm/>
                </CardContent>
            </Card>
        </>
    )
}

export default SecurityModule;