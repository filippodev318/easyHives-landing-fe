import './firstsection.css';
import screenGenerale from '../../../assets/appGenerale.png';

const FirstSection = ({ handleButtonClick }) => {
    return (
        <div className='easyhives__firstSection section__padding'>
            <div className='easyhives__firstSection-content'>

                <div className='easyhives__firstSection-descr-mobile'>
                    <h2 className='text__light font-Recoleta'>Le informazioni sulle tue arnie
                        <span className='text__dark font-Recoleta'> sempre disponibili</span></h2>
                    <p className='font-Inter'>Tieni sempre sotto controllo tutte le informazioni più importanti sulla tua famiglia tramite l’interfaccia semplice ed intuitiva.</p>
                </div>

                <div className='easyhives__firstSection-screen'>
                    <img src={screenGenerale} alt=""></img>
                </div>

                <div className='easyhives__firstSection-descr'>
                    <h2 className='text__light font-Recoleta'>Le informazioni sulle tue arnie
                        <span className='text__dark font-Recoleta'> sempre disponibili</span></h2>
                    <p className='font-Inter'>Tieni sempre sotto controllo tutte le informazioni più importanti sulla tua famiglia tramite l’interfaccia semplice ed intuitiva.</p>
                    <button className='font-Inter'
                        onClick={handleButtonClick} type='button'>Provala per primo</button>
                </div>

                <div className='easyhives__firstSection-input'>
                    <button className='font-Inter'
                        onClick={handleButtonClick}>Provala per primo</button>
                </div>
            </div>
        </div>
    )
}

export default FirstSection