import HomeSlider from "@/modules/homePage/homeSlider/HomeSlider";
import Explore from "@/modules/homePage/explore/Explore";
import Fined from "@/modules/homePage/fined/Fined";
import JoinNow from "@/modules/homePage/joinNow/JoinNow";

const HomePage = ({ dict }) => {
    return(
        <main>
            <HomeSlider dict={dict} />
            <Explore dict={dict} />
            <Fined dict={dict} />
            <JoinNow dict={dict} />
        </main>
    )
}

export default HomePage;
