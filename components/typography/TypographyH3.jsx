import {cn} from "@/lib/utils";

export function TypographyH3({children,className}) {
    return (
        <h3 className={cn("scroll-m-20 text-xl font-semibold tracking-tight" ,className)}>
            {children}
        </h3>
    )
}
