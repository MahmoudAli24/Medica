import {cn} from "@/lib/utils";

export function TypographyH2({children ,className}) {
    return (
        <h2 className={cn("scroll-m-20 pb-2 text-[40px] font-bold tracking-tight first:mt-0 md:text-5xl" , className)}>
            {children}
        </h2>
    )
}
