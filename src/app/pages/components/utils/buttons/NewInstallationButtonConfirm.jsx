import { NewInstallationButtonConfirmStyle as NewInstallationButton } from "./styles";

export default function NewInstallationButtonConfirm(props) {
    return (
        <NewInstallationButton
            onClick={props.onClick}
            type={props.type}>
            <span>
                {props.text}
            </span>
        </NewInstallationButton>
    );
}
