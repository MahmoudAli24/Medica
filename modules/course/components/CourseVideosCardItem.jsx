import { FaPlay } from "react-icons/fa6";
import { TypographyLead } from "@/components/typography/TypographyLead";
import { TypographyMuted } from "@/components/typography/TypographyMuted";

const CourseVideosCardItem = ({ dict, videoNumber, videoTitle, watchStatus, duration }) => {
    return (
        <div className="flex items-center justify-between flex-wrap bg-[#F7F8F8] px-4 py-1 rounded-full">
            <div className="flex items-center gap-3">
                <div className="text-white rounded-full bg-gradient-to-tr from-[#31C7FE] to-[#00F2FE]">
                    <span className="inline-flex items-center justify-center w-[40px] h-[40px]">
                        <FaPlay size={20} />
                    </span>
                </div>
                <TypographyLead className="flex items-center gap-2 w-full">
                    <span className="inline-block px-2 text-white font-bold bg-[#31C7FE] rounded">
                        {videoNumber}
                    </span>
                    {videoTitle}
                </TypographyLead>
            </div>
            <TypographyMuted className="flex gap-6 items-center mx-auto mt-2 sm:m-0">
                <span className="text-green-400">{watchStatus}</span>
                <span>{duration}</span>
            </TypographyMuted>
        </div>
    );
};

export default CourseVideosCardItem;
