import { useForm } from 'react-hook-form';
import React from 'react';
import './form.css';

const Form = ({ submitData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => submitData(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="easyHives__form-input">
                    <input
                        placeholder="Inserisci la tua email *"
                        {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}
                    />
                    <div className='easyHives__form-input-error'>
                        {errors.email?.type === "required" && "L'email è obbligatoria"}
                        {errors.email?.type === "pattern" &&
                            "Il formato dell'email non è valido"}
                    </div>
                    <select {...register("hives")}>
                        <option value="0">0-25 alveari</option>
                        <option value="1">26-50 alveari</option>
                        <option value="2">50+ alveari</option>
                    </select>
                    <button type='submit'>Invia</button>
                    <div className='easyHives__form-input-privacy'>
                        <input type="checkbox" {...register("privacy", { required: true })} />
                        <label className={`${errors.privacy?.type === "required" ? 'error' : ''}`}>
                            Autorizzo il trattamento dei miei dati personali *</label>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form