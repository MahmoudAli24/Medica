import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const NotificationsCard = ({ title, message, yesId, noId }) => {
    return (
        <div className="border-2 border-[#2A79E2] bg-[#2A79E2]/5 rounded p-3 flex justify-between items-center">
            <div>
                <h4 className="font-bold">{title}</h4>
                <p className="text-sm">{message}</p>
            </div>
            <div className="space-x-4">
                <RadioGroup className={"flex items-center gap-3"}>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value={yesId} id={yesId} />
                        <Label htmlFor={yesId}>Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value={noId} id={noId} />
                        <Label htmlFor={noId}>No</Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
};

export default NotificationsCard;
