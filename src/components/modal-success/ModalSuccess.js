import './modalsuccess.css'

const ModalSuccess = ({ show, handleClose }) => {
    if (!show) {
        return null
    }

    return (
        <div className='easyHives__modal'>
            <div className='easyHives__modal-content'>
                <div className='easyHives__modal-content-header'>
                    <h1 className='text__light font-Recoleta'>Grazie per esserti iscritto</h1>
                    <p className='font-Inter'>Ti terremo aggiornato su quello che succede all'App</p>
                </div>
                <div className='easyHives__modal-content-body'>

                </div>
                <div className='easyHives__modal-content-footer font-Inter'>
                    <button onClick={handleClose}>Chiudi</button>
                </div>
            </div>
        </div>
    )
}

export default ModalSuccess