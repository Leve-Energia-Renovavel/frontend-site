"use client"

import { FormButton, Loading } from './styles';

export default function HomeFormButton({ title, isLoading, isMobile }) {
    return (
        <FormButton
            ismobile={isMobile.toString()}
            type='submit'
            form={`leadForm${isMobile && "Mobile"}`}>
            {isLoading ? <Loading size={20} /> : <span>{title}</span>}
        </FormButton>
    )
}