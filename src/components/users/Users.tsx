import React, {FC, useState, useEffect } from 'react';
import {IUser} from "../../models/IUser";
import {getUsers} from "../../services/api.service";
import User from "../user/User";
import './Users.css';

type UsersProps = {
    lift: (id: number) => void
}

const Users: FC<UsersProps> = ({lift}) => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {

      getUsers()
          .then((response: IUser[]) => {
              setUsers(response);
          })
    }, []);

    return (
        <div className="users-container">
            {
                users.map(value => <User key={value.id} lift={lift} item={value}/>)
            }
        </div>
    );
};

export default Users;