"use client"

import { FormButton, Loading } from './styles';

export default function HomeFormButton({ title, isLoading, isMobile }) {
    return (
        <FormButton
            className={`${isMobile ? "homeFormButtonMobile" : "homeFormButton"}`}
            ismobile={isMobile.toString()}
            type='submit'
            form={`${isMobile ? "leadFormMobile" : "leadForm"}`}>
            {isLoading ? <Loading size={20} /> : <span className={`${isMobile ? "homeFormButtonTitleMobile" : "homeFormButtonTitle"}`}>{title}</span>}
        </FormButton>
    )
}