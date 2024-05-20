import {Progress} from "@/components/ui/progress";

const FeedbackRateBar = ({value , count , stars}) => {
    return (
        <div className={"flex items-center justify-center gap-2"}>
            <span>{stars} stars</span>
            <Progress className={"flex-1 w-4/6 h-1"} value={value}/>
            <span>{count} ({value}%)</span>
        </div>
    )
}

export default FeedbackRateBar