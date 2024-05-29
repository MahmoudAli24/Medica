import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";

const ButtonBorder = ({children, className, ...props}) => {
    return (
        <Button {...props} variant="outline"
                className={cn("border-[--secondary-color] border-2 px-4 py-3 rounded-full", className)}>{children}</Button>
    )
}
export default ButtonBorder