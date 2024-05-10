import {cn} from "@/lib/utils";

export function TypographyH1({className , children}) {
    return (
        <h1 className={cn("scroll-m-20 text-4xl tracking-tight lg:text-5xl",className)}>
            {children}
        </h1>
    )
}
