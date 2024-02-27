import { FormButtonStyle as Button } from './styles';

export default function FormButton(props) {

    return (
        <>
            <Button
                onClick={props.onClick}
                className="formInput"
                variant="outlined"
                type="submit">
                <span>{props.text}</span>
            </Button >
        </>
    )
}