import AOS from 'aos'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import NavBar from './components/dark-navbar/NavBar'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Certificate from './pages/certificate/Certificate'

function App() {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration (in ms)
            easing: 'ease-in', // Animation easing
            once: false,
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/certificate' element={<><NavBar/><Certificate/></>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
