import MainHeader from '../main-header/MainHeader'
import NavBar from '../navbar/NavBar'
import './background-img.scss'

const BackgroundImg = () => {
    return (
        <div className="bg-img">
            <NavBar/>
            <MainHeader/>
        </div>
    )
}
export default BackgroundImg