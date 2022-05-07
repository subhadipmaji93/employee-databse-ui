import Button from "./Button";
import { useHistory } from "react-router";

const NavigateToFormButton = ({color, text, path})=>{
    const history = useHistory();
    const handleRoute = ()=>{
        history.push(`${path}`);
    };
    return (
        <Button color={color} onClick={handleRoute} text={text}></Button>
    );
};

export default NavigateToFormButton;