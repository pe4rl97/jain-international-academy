import { useLocation } from "react-router-dom"
import AboutUs from "../components/about-us/AboutUs"
import BackgroundImg from "../components/background-img/BackgroundImg"
import Certificates from "../components/certificates/Certificates"
import ContactUs from "../components/contact-us/ContactUs"
import Gallery from "../components/gallery/Gallery"
import Stats from "../components/stats/Stats"
import { useEffect } from "react"

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        // Check the hash in the URL and scroll to the corresponding section
        const hash = location.hash;
        if (hash) {
            const sectionId = hash.replace("#", ""); // Remove the "#" to get the section id
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);
    return (
        <>
            <BackgroundImg/>
            <Stats/>
            <AboutUs/>
            <Gallery/>
            <Certificates/>
            <ContactUs/>
        </>
    )
}

export default Home