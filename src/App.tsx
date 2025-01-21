import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import Certificate from './pages/Certificate'

function App() {

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
