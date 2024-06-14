"use client"
import { useState } from 'react';
import SettingsHeader from "@/modules/Dashboard/dashboardSettings/components/SettingsHeader";
import { TypographyLead } from "@/components/typography/TypographyLead";
import ButtonBorder from "@/modules/Dashboard/dashboardSettings/components/ButtonBorder";
import EditIcon from "@/components/icons/EditIcon";
import EditPersonalInformation
    from "@/modules/Dashboard/dashboardSettings/accountInformation/components/personalInformation/components/EditPersonalInformation";

const PersonalInformation = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [personalInfo, setPersonalInfo] = useState({
        name: "Karim Samy Farid Hassan",
        email: "karim.samy.2013@gmail.com",
        phoneNumber: "00201112526522",
        specialization: "Diagnostic radiology"
    });

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleSave = (updatedInfo) => {
        setPersonalInfo(updatedInfo);
        setIsEditing(false);
    };

    return (
        <>
            {isEditing ? (
                <EditPersonalInformation
                    initialData={personalInfo}
                    onCancel={handleCancel}
                    onSave={handleSave}
                />
            ) : (
                <div className="p-3 rounded-lg mt-5 border space-y-10">
                    <div className="flex justify-between items-center">
                        <SettingsHeader>Personal Information</SettingsHeader>
                        <ButtonBorder className="space-x-3" onClick={handleEditClick}>
                            <span>Edit</span>
                            <span><EditIcon /></span>
                        </ButtonBorder>
                    </div>
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div>
                            <p className="text-gray-400 text-[16px] font-thin">Name</p>
                            <TypographyLead className="text-[--main-color]">{personalInfo.name}</TypographyLead>
                        </div>
                        <div>
                            <p className="text-gray-400 text-[16px] font-thin">Email</p>
                            <TypographyLead className="text-[--main-color]">{personalInfo.email}</TypographyLead>
                        </div>
                        <div>
                            <p className="text-gray-400 text-[16px] font-thin">Phone Number</p>
                            <TypographyLead className="text-[--main-color]">{personalInfo.phoneNumber}</TypographyLead>
                        </div>
                        <div>
                            <p className="text-gray-400 text-[16px] font-thin">Specialization</p>
                            <TypographyLead className="text-[--main-color]">{personalInfo.specialization}</TypographyLead>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PersonalInformation;
