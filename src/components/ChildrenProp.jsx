export const ChildrenProp = ({ children }) => {
    console.log(children);
    return (
        <div>
            <h1>Children Prop ...</h1>
            { children }
        </div>
    );
}