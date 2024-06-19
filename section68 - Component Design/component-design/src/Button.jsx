import "./Button.css";

function Button({clickFunc, label="Click Me"}){
    return <button className="Button" onClick={clickFunc}>{label}</button>
}

export default Button