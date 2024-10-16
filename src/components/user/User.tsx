import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import './User.css'

type UserProps = {
    item: IUser;
    lift: (id: number) => void
}
const User: FC<UserProps> = ({item, lift}) => {
    return (
        <div className="user-container" key={item.id}>
            <h4>{item.firstName} {item.lastName}</h4>
            <button onClick={() => { lift(item.id) }}>
                View posts
            </button>

        </div>

    );
};

export default User;