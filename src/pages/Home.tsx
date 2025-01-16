import AboutUs from "../components/about-us/AboutUs"
import BackgroundImg from "../components/background-img/BackgroundImg"
import HappeningNow from "../components/happening-now/HappeningNow"
import Stats from "../components/stats/Stats"

const Home = () => {
    return (
        <>
            <BackgroundImg/>
            <Stats/>
            <AboutUs/>
            <HappeningNow/>
        </>
    )
}

export default Home