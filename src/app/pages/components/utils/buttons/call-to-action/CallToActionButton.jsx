import { HOME_FORM_ID } from '@/app/pages/enums/globalEnums';
import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import { CTAButton } from './styles';

export default function CallToActionButton({ isMobile, onClick, title, icon, endIcon, starIcon }) {

    return (
        <CTAButton onClick={() => handleScrollToId(HOME_FORM_ID)}
            ismobile={isMobile.toString()}
            startIcon={starIcon && icon}
            endIcon={endIcon && icon}>
            <span>{title}</span>
        </CTAButton>
    )
}