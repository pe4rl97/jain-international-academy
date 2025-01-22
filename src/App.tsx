import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Certificate from './pages/certificate/Certificate'
import { useEffect } from 'react'
import AOS from 'aos'

function App() {
    useEffect(() => {
        AOS.init({
            duration: 500, // Animation duration (in ms)
            easing: 'ease-in-out', // Animation easing
            once: false,
            mirror: true, // Whether elements should animate out while scrolling past them
        });
    }, []);
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/certificate' element={<Certificate/>}/>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
