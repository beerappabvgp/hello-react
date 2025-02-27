export const ChildrenProp = ({ children }) => {
    console.log(children);
    return (
        <div>
            <h1>Children Prop ...</h1>
            {/* <h1>Parent Component .... </h1>
                <ChildComponentOne name="anil"  age = {20} />
                <ChildComponentTwo name="aravind"/> */}
            { children }
        </div>
    );
}