import SettingsHeader from "@/modules/Dashboard/dashboardSettings/components/SettingsHeader";
import ButtonBorder from "@/modules/Dashboard/dashboardSettings/components/ButtonBorder";
import EditIcon from "@/components/icons/EditIcon";
import {TypographyLead} from "@/components/typography/TypographyLead";

const Address = ()=>{
    return(
        <>
            <div className={"p-3 rounded-lg mt-5 border space-y-10"}>
                <div className={"flex justify-between items-center"}>
                    <SettingsHeader>Personal Information</SettingsHeader>
                    <ButtonBorder className={"space-x-3"}><span>Edit</span><span><EditIcon/></span></ButtonBorder>
                </div>
                <div className={"flex items-center justify-between gap-3 flex-wrap"}>
                    <div>
                        <p className={"text-gray-400 text-[16px] font-thin"}>Country</p>
                        <TypographyLead className={"text-[--main-color]"}>Egypt</TypographyLead>
                    </div>
                    <div>
                        <p className={"text-gray-400 text-[16px] font-thin"}>City/State</p>
                        <TypographyLead className={"text-[--main-color]"}>Giza,Haram</TypographyLead>
                    </div>
                    <div>
                        <p className={"text-gray-400 text-[16px] font-thin"}>Postal Code</p>
                        <TypographyLead className={"text-[--main-color]"}>AS45856874</TypographyLead>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Address