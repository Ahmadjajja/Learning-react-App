import SecondChild from "./SecondChild";
function FirstChild() {
    return (
        <div>
            FirstChild Component
            <div><SecondChild /></div>
        </div>
    );
}
export default FirstChild;