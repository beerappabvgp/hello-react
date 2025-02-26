export const EventExample = () => {

    const handleClick = () => {
        console.log("clicked");
        alert("Clicked on the button ... ");
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}