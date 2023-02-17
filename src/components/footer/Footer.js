import './footer.css';

const Footer = () => {
    return (
        <div className="easyhives__footer">
            <div className="easyhives__footer-content">
                <h1 className="text__white font-custom">Unisciti ad
                    <span className="text__dark font-custom"> EasyHives</span></h1>
                <p>L'app che semplifica la vita dell'apicoltore.</p>

                <div className="easyhives__footer-content-input font-custom">
                    <button type='button'>Provala per primo</button>
                </div>
            </div>
        </div>
    )
}

export default Footer