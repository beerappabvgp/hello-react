export const User = ({ user }) => {
    return (
        <div>
            <h1>User Name: { user.name }</h1>
            <h1>User age: { user.age }</h1>
            <h1>user email: { user.email } </h1>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}