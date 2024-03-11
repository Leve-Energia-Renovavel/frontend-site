import { MobileHeaderButtonContained as Button } from '../../header/styles';

export default function MobileHeaderButtonContained({ onClick, isSubmit, ...props }) {
    return (
        <Button
            type={isSubmit ? 'submit' : 'button'}
            onClick={onClick}
            disableElevation={true}
            variant={props.variant}>
            <span>{props.text}</span>
        </Button>
    );
};
