import { NewInstallationButtonStyle } from "../../styles";

export default function NewInstallationButton(props) {
    return (
        <NewInstallationButtonStyle onClick={props.onClick}>
            <span>
                {props.text}
            </span>
        </NewInstallationButtonStyle>
    );
}
