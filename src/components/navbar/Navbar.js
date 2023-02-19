import './navbar.css'
import apple from '../../assets/apple.png'
import android from '../../assets/android.png'

const Navbar = () => {
    return (
        <div className="easyhives__navbar">
            <div className="easyhives__navbar-links">
                <div className="easyhives__navbar-links-app-name">
                    <h1 className="text__dark font-Recoleta">EasyHives</h1>
                </div>
                <div className="easyhives__navbar-links-os-logo">
                    <img src={apple} alt=""></img>
                    <img className="easyhives__navbar-links-os-logo-android" src={android} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Navbar