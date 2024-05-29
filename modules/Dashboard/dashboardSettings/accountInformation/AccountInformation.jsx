import SettingsHeader from "@/modules/Dashboard/dashboardSettings/components/SettingsHeader";
import UserHeader from "@/modules/Dashboard/dashboardSettings/accountInformation/components/UserHeader";

const AccountInformation = () => {
    return (<>
        <SettingsHeader className={"pt-0 border-b"}>Account Information</SettingsHeader>
        <div>
            <UserHeader/>
        </div>

    </>)
}

export default AccountInformation