import Button from "./button";
var someValue = "data";
function ThirdChild() {
    return (
        <div>
            <Button data={someValue} color="blue" title="HTML Prop2"/>
            <Button color="green" title="HTML Prop3"/>
            {/* <button>Learn HTML</button>
            <button>HTML TAGS</button> */}
        </div>
    );
}
export default ThirdChild;