import { useForm } from 'react-hook-form';
import React from 'react';
import './form.css';
import { MenuItem, Select, TextField } from '@mui/material';
import styled from '@emotion/styled';

const Form = ({ submitData }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => { submitData(data) }

    const CssTextField = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderRadius: '44px'
            }
        }
    });

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="easyHives__form-input">
                    <CssTextField
                        placeholder='Inserisci la tua email*'
                        {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                        })}>
                    </CssTextField>

                    <div className='easyHives__form-input-error'>
                        {errors.email?.type === "required" && "L'email è obbligatoria"}
                        {errors.email?.type === "pattern" &&
                            "Il formato dell'email non è valido"}
                    </div>
                    <Select sx={{ borderRadius: '44px' }} defaultValue={0} {...register("hives", { min: 1 })}>
                        <MenuItem value={0}>Quanti alveari hai?*</MenuItem>
                        <MenuItem value={1}>0-25 alveari</MenuItem>
                        <MenuItem value={2}>26-50 alveari</MenuItem>
                        <MenuItem value={3}>50+ alveari</MenuItem>
                    </Select>

                    <div className='easyHives__form-input-error'>
                        {errors.hives?.type === "min" && 'Campo obbligatorio'}
                    </div>
                    <button className='font-Inter' type='submit'>Invia</button>
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