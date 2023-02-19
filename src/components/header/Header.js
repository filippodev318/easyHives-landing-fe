import './header.css';

const Header = ({ handleButtonClick }) => {
    return (
        <div className="easyhives__header section__padding">
            <div className="easyhives__header-content">
                <h1 className="text__light font-Recoleta">Tutti i tuoi alveari
                    <span className="text__dark font-Recoleta"> in una sola App</span></h1>
                <p className='font-Inter'>Con EasyHives monitori e gestici il tuo apiario in modo semplice e veloce.</p>

                <div className="easyhives__header-content-input">
                    <button className='font-Inter'
                        onClick={handleButtonClick} type='button'>Provala per primo</button>
                </div>
            </div>
        </div>
    )
}

export default Header