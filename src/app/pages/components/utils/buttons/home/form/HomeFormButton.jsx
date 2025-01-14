"use client"

import { FormButton, Loading } from './styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function HomeFormButton({ title, isLoading }) {
    return (
        <FormButton
            className={`homeFormButton`}
            type='submit'
            form={`leadForm`}
            endIcon={<ArrowForwardIcon className="icon" />}>
            {isLoading ? <Loading size={20} /> : <span className={`homeFormButtonTitle`}>{title}</span>}
        </FormButton>
    )
}