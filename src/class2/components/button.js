function Button(props) {
    // var someValue = "data";
    return (
        <div>
            <button  style={{color:props.color}}>{props.title + " " + props.data}</button>
        </div>
    );
}
export default Button;