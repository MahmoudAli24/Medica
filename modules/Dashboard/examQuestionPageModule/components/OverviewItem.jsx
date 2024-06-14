import {TypographyH3} from "@/components/typography/TypographyH3";

const OverviewItem = ({ icon, label, value }) => (
    <div className="flex items-center gap-4">
        <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#9D9D9D]/10 rounded">
            {icon}
        </div>
        <div>
            <p>{label}</p>
            <TypographyH3 className="text-[--secondary-color] text-[30px]">{value}</TypographyH3>
        </div>
    </div>
);

export default OverviewItem;
