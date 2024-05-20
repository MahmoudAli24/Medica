import VideoCard from "@/components/sharedComponents/VideoCard";
import image from "@/public/Curriculum.png"
import CurriculumSlider from "@/modules/CourseVideoPage/components/CurriculumSlider";

const Curriculum = ()=>{
    return(
        <section className={"container py-8"}>
            <h2 className={"text-[--main-color] text-[35px] font-bold my-3"}>Curriculum</h2>
            <div className={"grid grid-cols-4 gap-5"}>
                <VideoCard title={'lorem ipsom ldfs,mldf ;lkmasdasld awsd'} image={image} className={"shadow-2xl"}/>
                <div className={"col-span-3"}>
                    <CurriculumSlider/>
                </div>
            </div>
        </section>
    )
}

export default Curriculum;