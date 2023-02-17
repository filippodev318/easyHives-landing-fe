import './thirdsection.css';
import screenCalendario from '../../../assets/screenCalendario.png';

const ThirdSection = ({ handleButtonClick }) => {
    return (
        <div className='easyhives__thirdSection section__padding'>
            <div className='easyhives__thirdSection-content'>
                <div className='easyhives__thirdSection-descr'>
                    <h2 className='text__light font-custom'> Programma
                        <span className='text__dark font-custom'> le tue azioni con facilità</span></h2>
                    <p className='font-custom'>Non lasciare gli eventi a caso, con il calendario e note integrate nell'app programmi e controlli tutte le attività da eseguire sulle tue arnie.</p>
                    <button className='font-custom' onClick={handleButtonClick} type='button'>Provala per primo</button>
                </div>
                <div className='easyhives__thirdSection-screen'>
                    <img src={screenCalendario} alt=""></img>
                </div>

                <div className='easyhives__thirdSection-input'>
                    <button className='font-custom'
                        onClick={handleButtonClick} type='button'>Provala per primo</button>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection