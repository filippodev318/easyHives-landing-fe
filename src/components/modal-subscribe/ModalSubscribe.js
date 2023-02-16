import Form from '../form/Form';
import './modalsubscribe.css';

const ModalSubscribe = ({
    show, submitData, handleClose
}) => {
    if (!show) {
        return null
    }

    return (
        <div className='easyHives__modal'>
            <div className='easyHives__modal-content'>
                <div className='easyHives__modal-content-header-close'>
                    <button onClick={handleClose}>X</button>
                </div>

                <div className='easyHives__modal-content-header'>
                    <h1 className='text__light'>Resta aggiornato</h1>
                    <p>sii tra i primi a provare l'app questa estate!</p>
                </div>
                <div className='easyHives__modal-content-body'>
                    <Form submitData={submitData}
                    />
                </div>
                <div className='easyHives__modal-content-footer'></div>
            </div>
        </div>
    )


}

export default ModalSubscribe