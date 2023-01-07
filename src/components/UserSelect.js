import { useEffect, useState } from "react";
import { getAllUsers } from "../utils/api";
import UserCard from "./UserCard";
import { getUserDetails } from "../utils/api";
import Grid from "@mui/material/Grid";

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
        <div className="account__select container">
            <Grid container rowSpacing={4} columnSpacing={4}>
                <Grid item xs={12}>
                    <h2 className="account__select-user">Select a user</h2>
                </Grid>
                {registeredUsers.map((user) => {
                    return (
                        <Grid
                            key={user.username}
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={4}
                        >
                            <UserCard
                                key={user.username}
                                username={user.username}
                                avatar={user.avatar_url}
                                loginUser={LoginUser}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
}
