import AccountInformation from "@/modules/Dashboard/dashboardSettings/accountInformation/AccountInformation"
import PersonalInformation
    from "@/modules/Dashboard/dashboardSettings/accountInformation/components/personalInformation/PersonalInformation";
import Address from "@/modules/Dashboard/dashboardSettings/accountInformation/components/address/Address";

const AccountInformationPage = () => {
    return (<>
            <AccountInformation/>
            <PersonalInformation/>
            <Address/>
        </>
    )
}

export default AccountInformationPage