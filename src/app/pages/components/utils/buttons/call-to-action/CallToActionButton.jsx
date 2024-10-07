import { handleScrollToId } from '@/app/utils/browser/BrowserUtils';
import { CTAButton } from './styles';

export default function CallToActionButton({ isMobile, onClick, title, icon, endIcon, starIcon }) {

    return (
        <CTAButton onClick={() => handleScrollToId("calculateYourEconomy")}
            ismobile={isMobile.toString()}
            startIcon={starIcon && icon}
            endIcon={endIcon && icon}>
            <span>{title}</span>
        </CTAButton>
    )
}