import dynamic from "next/dynamic";
import SettingsHeader from "@/modules/Dashboard/dashboardSettings/components/SettingsHeader";
import BillingCard from "@/modules/Dashboard/dashboardSettings/billingModule/components/BillingCard";
const BillingTable = dynamic(()=>(import( "@/modules/Dashboard/dashboardSettings/billingModule/components/BillingTable")));

const BillingModule = () => {
    return (<>
            <SettingsHeader className={"border-b"}>Billing</SettingsHeader>
            <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 "}>
                <BillingCard/>
                <BillingCard/>
                <BillingCard/>
            </div>
            <BillingTable/>
        </>

    )
}

export default BillingModule;