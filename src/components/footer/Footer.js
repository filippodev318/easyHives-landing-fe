import './footer.css';

const Footer = ({ handleButtonClick }) => {
    return (
        <div className="easyhives__footer">
            <div className="easyhives__footer-content">
                <h1 className="text__white font-Recoleta">Unisciti ad
                    <span className="text__dark font-Recoleta"> EasyHives</span></h1>
                <p>L'app che semplifica la vita dell'apicoltore.</p>

                <div className="easyhives__footer-content-input font-Inter">
                    <button onClick={handleButtonClick} type='button'>Provala per primo</button>
                </div>
            </div>
        </div>
    )
}

export default Footer