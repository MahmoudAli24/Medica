import SettingsHeader from "@/modules/Dashboard/dashboardSettings/components/SettingsHeader";
import NotificationsCard from "@/modules/Dashboard/dashboardSettings/notificationsModule/components/NotificationsCard";

const NotificationsModule = () => {
    return (
        <>
            <SettingsHeader className="border-b mb-3">Notifications</SettingsHeader>
            <div className="space-y-3">
                <NotificationsCard
                    title="Admonitions"
                    message="Would you like to receive notifications on your e-mail?"
                    yesId="Admonitions-yes"
                    noId="Admonitions-no"
                />
                <NotificationsCard
                    title="Some Other Title"
                    message="Some other message here"
                    yesId="SomeOther-yes"
                    noId="SomeOther-no"
                />
                <NotificationsCard
                    title="Another Title"
                    message="Another message here"
                    yesId="Another-yes"
                    noId="Another-no"
                />
            </div>
        </>
    );
};

export default NotificationsModule;
