import AboutUs from "../components/about-us/AboutUs"
import BackgroundImg from "../components/background-img/BackgroundImg"
import Certificates from "../components/certificates/Certificates"
import ContactUs from "../components/contact-us/ContactUs"
import Gallery from "../components/gallery/Gallery"
import HappeningNow from "../components/happening-now/HappeningNow"
import Stats from "../components/stats/Stats"

const Home = () => {
    return (
        <>
            <BackgroundImg/>
            <Stats/>
            <AboutUs/>
            <HappeningNow/>
            <Gallery/>
            <Certificates/>
            <ContactUs/>
        </>
    )
}

export default Home