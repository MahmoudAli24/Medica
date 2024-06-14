import { MdReportProblem } from "react-icons/md";

const ReportButton = () => (
    <div className="absolute top-12 left-6 flex flex-col items-center z-10">
        <button className="bg-transparent text-red-600 py-0">
            <MdReportProblem size={24} />
        </button>
        <span className="text-sm">Report</span>
    </div>
);

export default ReportButton;
