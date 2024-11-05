import { MobileHeaderButtonOutlined as Button } from "../styles";

export default function MobileHeaderButtonOutlined({ onClick, isSubmit, ...props }) {
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
