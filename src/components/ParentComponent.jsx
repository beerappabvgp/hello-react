import { ChildComponentOne } from "./ChildComponentOne";
import { ChildComponentTwo } from "./ChildComponentTwo";
import { ChildrenProp } from "./ChildrenProp";

export const ParentComponent = () => {
    return (
        <div>
            <ChildrenProp>
                <h1>Parent Component .... </h1>
                <ChildComponentOne name="anil"  age = {20} />
                <ChildComponentTwo name="aravind"/>
            </ChildrenProp>
            {/* <img src="" alt="" /> */}
            <ChildComponentOne> </ChildComponentOne>
        </div>
    );
}