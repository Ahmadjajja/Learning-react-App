import ThirdChild from "./thirdChild";
function SecondChild() {
    return (
        <div>
            SecondChild Component
            <div><ThirdChild /></div>
        </div>
    );
}
export default SecondChild;