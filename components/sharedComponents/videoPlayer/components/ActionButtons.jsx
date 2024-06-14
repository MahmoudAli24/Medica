import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {IoIosAttach, IoMdCloseCircleOutline} from "react-icons/io";
import {IoChatbubbles} from "react-icons/io5";
import XpIndicator from "@/components/sharedComponents/videoPlayer/components/XpIndicator";

const ActionButtons = () => (
    <div className="absolute top-10 right-6 flex items-center space-x-4 z-10">
        <XpIndicator xp={60} />
        <div>
            <Select>
                <SelectTrigger className="w-[180px] bg-transparent/50 border-none">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Advanced Training Program on sd,l klm;dcda</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <Separator orientation="vertical" className="h-8 text-gray-400" />
        <Button className="bg-transparent/50">
            <IoIosAttach size={20} />
            Attachments
        </Button>
        <Button className="bg-transparent/50">
            <IoChatbubbles size={24} />
            Chats
        </Button>
        <Button size="icon" className="bg-transparent flex flex-col items-center">
            <IoMdCloseCircleOutline size={24} />
            <span>Close</span>
        </Button>
    </div>
);

export default ActionButtons;
