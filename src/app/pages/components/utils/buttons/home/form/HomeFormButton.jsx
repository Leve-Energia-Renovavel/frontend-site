import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { FormButton, Loading } from './styles';

export default function HomeFormButton({ title, isLoading, isMobile }) {
    return (
        <FormButton
            isMobile={isMobile}
            type='submit'
            form='leadForm'
            endIcon={!isLoading ? <ArrowForwardIcon /> : <ArrowForwardIcon sx={{ display: "none" }} />}>
            {isLoading ? <Loading size={20} /> : <span>{title}</span>}
        </FormButton>
    )
}