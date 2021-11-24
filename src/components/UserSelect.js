import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/api";
import UserCard from "./UserCard";
import { getUserDetails } from "../utils/api";

export default function UserSelect({ user, setUser }) {
    const LoginUser = (username) => {
        // setIsLoading(true);
        getUserDetails(username)
            .then((res) => {
                setUser(res);
                // setIsLoading(false);
            })
            .catch((err) => {
                // setIsLoading(false);
                console.log(err);
            });
    };

    const [registeredUsers, setRegisteredUsers] = useState([]);
    useEffect(() => {
        getAllUsers().then((res) => {
            setRegisteredUsers(res);
        });
    }, []);

    return (
        <div className="account__select">
            <h2>Select a user</h2>
            {registeredUsers.map((user) => {
                return (
                    <UserCard
                        key={user.username}
                        username={user.username}
                        loginUser={LoginUser}
                    />
                );
            })}
        </div>
    );
}
