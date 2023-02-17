import './header.css';

const Header = ({ handleButtonClick }) => {
    return (
        <div className="easyhives__header section__padding">
            <div className="easyhives__header-content">
                <h1 className="text__light font-custom">Tutti i tuoi alveari
                    <span className="text__dark font-custom"> in una sola app</span></h1>
                <p>Con EasyHives monitori e gestici il tuo apiario in modo semplice e veloce.</p>

                <div className="easyhives__header-content-input">
                    <button className='font-custom'
                        onClick={handleButtonClick} type='button'>Provala per primo</button>
                </div>
            </div>
        </div>
    )
}

export default Header