import './downloadinfo.css'
import apple from '../../assets/apple.png'
import android from '../../assets/android.png'

const DownloadInfo = () => {
    return (
        <div className='easyHives__downloadInfo'>
            <p>L'applicazione sarà disponibile per </p>
            <img src={apple} alt=""></img>
            <span>iOS |</span>
            <img className="easyhives__navbar-links-os-logo-android" src={android} alt=""></img>
            <span>Android</span>
        </div>
    )
}

export default DownloadInfo