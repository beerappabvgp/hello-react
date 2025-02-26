import { users } from "../constants/users";
import { User } from "./User";

export const DisplayUsers = () => {
    return (
        <div>
            {
                users.map((user) => {
                    return <User user={user} key={user.id} />
                })
            }  
        </div>
    );
}


// [1,2,4,5] => [1, 4, 8, 10]