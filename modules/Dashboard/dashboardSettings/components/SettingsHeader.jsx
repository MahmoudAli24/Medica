import {TypographyH3} from "@/components/typography/TypographyH3";
import {cn} from "@/lib/utils";

const SettingsHeader = ({children ,className}) => {
    return(
        <>
            <TypographyH3 className={cn("py-3 font-[400]" , className)}>{children}</TypographyH3>
        </>
    )
}

export default SettingsHeader;