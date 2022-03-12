import Child from "./child";
import Button from "./button"
function Parent() {
    return (
        <div>
            Parent Component
            <Button color="red" title="Learn HTML"/>
            <div><Child /></div>
        </div>
    );
}
export default Parent;