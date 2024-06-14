import ExamQuestionPageModule from "@/modules/Dashboard/examQuestionPageModule/ExamQuestionPageModule";
import { fetchCourseExam } from "@/app/actions/coursesExamsAction";

const ExamQuestionPage = async ({ params }) => {
    const examQuestion = await fetchCourseExam(parseInt(params.id, 10));
    return (
        <ExamQuestionPageModule examQuestion={examQuestion} />
    );
};

export default ExamQuestionPage;
