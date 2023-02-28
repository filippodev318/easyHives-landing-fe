import './modalsuccess.css'
import successIcon from '../../assets/successIcon.png'

const ModalSuccess = ({ show, handleClose }) => {
    if (!show) {
        return null
    }

    return (
        <div className='easyHives__modal'>
            <div className='easyHives__modal-content'>
                <div className='easyHives__modal-content-header'>
                    <h1 className='text__light font-Recoleta-Bold'>Grazie</h1>
                    <p className='font-Inter'>i tuoi contatti sono stati registrati correttamente</p>
                </div>
                <div className='easyHives__modal-content-body'>
                <img src={successIcon} alt=""></img>
                </div>
                <div className='easyHives__modal-content-footer font-Inter'>
                    <button onClick={handleClose}>Chiudi</button>
                </div>
            </div>
        </div>
    )
}

export default ModalSuccess