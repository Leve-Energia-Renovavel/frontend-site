import { OutlinedButtonStyle } from "./styles";

export default function NewOutlinedButton(props) {
    return (
        <OutlinedButtonStyle onClick={props.onClick}>
            <span>
                {props.text}
            </span>
        </OutlinedButtonStyle>
    );
}
