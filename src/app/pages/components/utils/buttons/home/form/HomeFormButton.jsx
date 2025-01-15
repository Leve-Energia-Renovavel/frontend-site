import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FormButton, Loading } from './styles';

export default function HomeFormButton({ title, isLoading }) {
    return (
        <FormButton
            className={`homeFormButton`}
            type='submit'
            form={`leadForm`}
            endIcon={!isLoading && <ArrowForwardIcon className="icon" />}>
            {isLoading ? <Loading size={20} /> : <span className={`homeFormButtonTitle`}>{title}</span>}
        </FormButton>
    )
}