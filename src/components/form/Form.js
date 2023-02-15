import './form.css';

const Form = ({ handleSubmit, email, hives, handleEmailChange, handleChangeHive }) => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="easyHives__form-input">
                    <input value={email} onChange={handleEmailChange} type="email" placeholder="Inserisci la tua email *" />
                    <select value={hives} onChange={handleChangeHive}>
                        <option value="0">0-25 alveari</option>
                        <option value="1">26-50 alveari</option>
                        <option value="2">50+ alveari</option>
                    </select>
                    <button type='submit'>Invia</button>
                    <div className='easyHives__form-input-privacy'>
                        <input type="checkbox" id='checkbox' /> <label>Autorizzo il trattamento dei miei dati personali *</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form