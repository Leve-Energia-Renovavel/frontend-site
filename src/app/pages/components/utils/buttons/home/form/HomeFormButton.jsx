"use client"

import { FormButton, Loading } from './styles';

export default function HomeFormButton({ title, isLoading }) {
    return (
        <FormButton
            className={`homeFormButton`}
            type='submit'
            form={`leadForm`}>
            {isLoading ? <Loading size={20} /> : <span className={`homeFormButtonTitle`}>{title}</span>}
        </FormButton>
    )
}