import HomeSlider from "@/modules/homePage/homeSlider/HomeSlider";
import Explore from "@/modules/homePage/explore/Explore";
import Fined from "@/modules/homePage/fined/Fined";
import JoinNow from "@/modules/homePage/joinNow/JoinNow";

const HomePage = () => {
    return(
        <main>
            <HomeSlider/>
            <Explore/>
            <Fined/>
            <JoinNow/>
        </main>
    )
}

export default HomePage