import { DashboardButtonStyle } from "./styles";

export default function DashboardButton(props) {
    return (
        <DashboardButtonStyle onClick={props.onClick}>
            <span>
                {props.text}
            </span>
        </DashboardButtonStyle>
    );
}
