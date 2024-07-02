import CourseHead from "@/modules/course/CourseHead";
import CourseOverview from "@/modules/course/CourseOverview";
import CourseLearn from "@/modules/course/CourseLearn";
import CourseVideos from "@/modules/course/CourseVideos";
import CourseFeedback from "@/components/sharedComponents/CourseFeedback";
import JoinNow from "@/modules/homePage/joinNow/JoinNow";
import CourseMayLike from "@/modules/course/CourseMayLike";
import feedbackImage from "@/public/icons/feedback.png";

const Course = ({dict}) => {
    const feedbackData = [
        { value: 80, count: 100, stars: 5 },
        { value: 60, count: 80, stars: 4 },
        { value: 40, count: 60, stars: 3 },
        { value: 20, count: 40, stars: 2 },
        { value: 10, count: 20, stars: 1 },
    ];

    const feedbackDataR = [
        { image: feedbackImage, userName: "User 1", rate: 4, date: "2024-05-01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { image: feedbackImage, userName: "User 2", rate: 5, date: "2024-05-02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },{ image: feedbackImage, userName: "User 1", rate: 4, date: "2024-05-01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { image: feedbackImage, userName: "User 2", rate: 5, date: "2024-05-02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },{ image: feedbackImage, userName: "User 1", rate: 4, date: "2024-05-01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { image: feedbackImage, userName: "User 2", rate: 5, date: "2024-05-02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },{ image: feedbackImage, userName: "User 1", rate: 4, date: "2024-05-01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { image: feedbackImage, userName: "User 2", rate: 5, date: "2024-05-02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },{ image: feedbackImage, userName: "User 1", rate: 4, date: "2024-05-01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { image: feedbackImage, userName: "User 2", rate: 5, date: "2024-05-02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },{ image: feedbackImage, userName: "User 1", rate: 4, date: "2024-05-01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { image: feedbackImage, userName: "User 2", rate: 5, date: "2024-05-02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },{ image: feedbackImage, userName: "User 1", rate: 4, date: "2024-05-01", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { image: feedbackImage, userName: "User 2", rate: 5, date: "2024-05-02", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ];
    return(
        <main>
            <CourseHead dict={dict}/>
            <CourseOverview dict={dict}/>
            <CourseLearn dict={dict}/>
            <CourseVideos dict={dict}/>
            <CourseFeedback dict={dict} feedbackData={feedbackData} feedbackDataR={feedbackDataR}/>
            <JoinNow dict={dict}/>
            <CourseMayLike dict={dict}/>
        </main>
    )
}

export default Course