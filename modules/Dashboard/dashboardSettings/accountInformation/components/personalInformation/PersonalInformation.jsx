import SettingsHeader from "@/modules/Dashboard/dashboardSettings/components/SettingsHeader";
import {TypographyLead} from "@/components/typography/TypographyLead";
import ButtonBorder from "@/modules/Dashboard/dashboardSettings/components/ButtonBorder";
import EditIcon from "@/components/icons/EditIcon";

const PersonalInformation = () => {
    return (
        <>
            <div className={"p-3 rounded-lg mt-5 border space-y-10"}>
                <div className={"flex justify-between items-center"}>
                    <SettingsHeader>Personal Information</SettingsHeader>
                    <ButtonBorder className={"space-x-3"}><span>Edit</span><span><EditIcon/></span></ButtonBorder>
                </div>
                <div className={"flex items-center justify-between gap-3 flex-wrap"}>
                    <div>
                        <p className={"text-gray-400 text-[16px] font-thin"}>Name</p>
                        <TypographyLead className={"text-[--main-color]"}>Karim Samy Farid Hassan</TypographyLead>
                    </div>
                    <div>
                        <p className={"text-gray-400 text-[16px] font-thin"}>Email</p>
                        <TypographyLead className={"text-[--main-color]"}>karim.samy.2013@gmail.com</TypographyLead>
                    </div>
                    <div>
                        <p className={"text-gray-400 text-[16px] font-thin"}>Phone Number</p>
                        <TypographyLead className={"text-[--main-color]"}>00201112526522</TypographyLead>
                    </div>
                    <div>
                        <p className={"text-gray-400 text-[16px] font-thin"}>Specialization</p>
                        <TypographyLead className={"text-[--main-color]"}>Diagnostic radiology</TypographyLead>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalInformation