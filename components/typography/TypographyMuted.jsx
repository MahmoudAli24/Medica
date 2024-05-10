import {cn} from "@/lib/utils";

export function TypographyMuted({children,className}) {
    return (
        <p className={cn("text-sm text-muted-foreground",className)}>{children}</p>
    )
}
