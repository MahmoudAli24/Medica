import CourseCard from "@/components/sharedComponents/CoursesCard";
import {fetchCourses} from "@/app/actions/coursesActions";

const CoursesContent = async ({searchParams}) => {
    const data = await fetchCourses(searchParams);

    return (<div className="py-4 md:pt-14">
        <div className={"grid grid-cols-1 gap-4 lg:grid-cols-2"}>
            {data.map((course) => (
                <CourseCard key={course.id} item={course}/>
            ))}
        </div>
    </div>)
}

export default CoursesContent;