import FinedSlider from "@/modules/homePage/fined/FinedSlider";
import FindContent from "@/modules/homePage/fined/FindContent";

const Fined = () => {
    return (<>
        <section className="container pb-3">
            <div className={"grid grid-cols-1 md:grid-cols-7"}>
                <FindContent/>
                <div className="mt-4 md:col-span-4 md:mt-0">
                    <FinedSlider/>
                </div>
            </div>
        </section>
    </>)
}

export default Fined;