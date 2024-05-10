import {cn} from "@/lib/utils";

export function TypographyLead({children ,className}) {
    return (
        <p className={cn("text-lg text-muted-foreground",className)}>
            {children}
        </p>
    )
}
