import './secondsection.css';
import screenForza from '../../../assets/screenForza.png';
import screenRegina from '../../../assets/screenRegina.png';
import screenTelai from '../../../assets/screenTelai.png';

const SecondSection = () => {
    return (
        <div className='easyhives__secondSection section__padding'>
            <div className='easyhives__secondSection-header'>
                <h2 className='text__dark font-custom'>Puoi dire
                    <span className='text__light font-custom'> addio </span>  a carta e penna</h2>
            </div>
            <div className='easyhives__secondSection-content'>
                <div className='easyhives__secondSection-content-screen1'>
                    <img src={screenForza} alt=""></img>
                    <h2 className='text__light font-custom'>Forza</h2>
                    <p className='font-custom'>Usa lo slider per definire velocemente la forza della famiglia ad ogni controllo.</p>
                </div>

                <div className='easyhives__secondSection-content-screen2'>
                    <img src={screenTelai} alt=""></img>
                    <h2 className='text__light font-custom'>Telai</h2>
                    <p className='font-custom'>Aggiungi e rimuovi in pochi semplici click i telai monitorando lo stato di miele, polline e covata all'interno dell'arnia.</p>
                </div>

                <div className='easyhives__secondSection-content-screen3'>
                    <img src={screenRegina} alt=""></img>
                    <h2 className='text__light font-custom'>Regina</h2>
                    <p className='font-custom'>Registra facilmente le informazioni sulla regina, dall'anno di nascita alle caratteristiche più essenziali.</p>
                </div>
            </div>
        </div>
    )
}

export default SecondSection