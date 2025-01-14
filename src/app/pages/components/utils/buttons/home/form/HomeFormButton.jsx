import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FormButton, Loading } from './styles';

export default function HomeFormButton({ title, isLoading, isCompany }) {
    return (
        <FormButton
            isCompany={isCompany}
            className={`homeFormButton`}
            type='submit'
            form={`leadForm`}
            endIcon={<ArrowForwardIcon className="icon" />}>
            {isLoading ? <Loading size={20} /> : <span className={`homeFormButtonTitle`}>{title}</span>}
        </FormButton>
    )
}