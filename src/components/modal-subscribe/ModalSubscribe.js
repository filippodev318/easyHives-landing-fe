import CloseIcon from '../closeIcon/CloseIcon';
import Form from '../form/Form';
import './modalsubscribe.css';

const ModalSubscribe = ({
    show, submitData, handleClose
}) => {
    if (!show) {
        return null
    }

    return (
        <div className='easyHives__modal-subscribe'>
            <div className='easyHives__modal-subscribe-content'>
                <div className='easyHives__modal-subscribe-content-header-close'>
                    <button onClick={handleClose}><CloseIcon /></button>
                </div>

                <div className='easyHives__modal-subscribe-content-header'>
                    <h1 className='text__light font-Recoleta-Bold'>Resta aggiornato</h1>
                    <p>sii tra i primi a provare l'app questa estate!</p>
                </div>
                <div className='easyHives__modal-subscribe-content-body'>
                    <Form submitData={submitData}
                    />
                </div>
            </div>
        </div>
    )


}

export default ModalSubscribe