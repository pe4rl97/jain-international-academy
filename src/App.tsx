import { Outlet, Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Certificate from './pages/certificate/Certificate'
import { useEffect } from 'react'
import AOS from 'aos'
import NavBar from './components/dark-navbar/NavBar'
import Staff from './pages/staff/Staff'
import ArtCraft from './pages/facilities/ArtCraft'
import BiologyLab from './pages/facilities/BiologyLab'
import ChemistryLab from './pages/facilities/ChemistryLab'
import PhysicsLab from './pages/facilities/PhysicsLab'
import ComputerLab from './pages/facilities/ComputerLab'
import Karate from './pages/facilities/Karate'
import Library from './pages/facilities/Library'
import MathsLab from './pages/facilities/MathsLab'
import Music from './pages/facilities/Music'

function FacilityLayout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
}

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
                <Route path='/staff' element={<><NavBar/><Staff/></>}/>
                <Route path="/facility" element={<FacilityLayout />}>
                    <Route path="art-craft" element={<ArtCraft />} />
                    <Route path="biology-lab" element={<BiologyLab />} />
                    <Route path="chemistry-lab" element={<ChemistryLab />} />
                    <Route path="physics-lab" element={<PhysicsLab />} /> 
                    <Route path="computer-lab" element={<ComputerLab />} /> 
                    <Route path="karate" element={<Karate />} /> 
                    <Route path="library" element={<Library />} /> 
                    <Route path="maths-lab" element={<MathsLab />} /> 
                    <Route path="music" element={<Music />} /> 
                </Route>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
