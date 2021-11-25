import { getUserDetails } from "../utils/api";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function UserDetails({ user }) {
    const [userInfo, setUserInfo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getUserDetails(user.username)
            .then((res) => {
                setUserInfo(res);
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
            });
    }, [user]);

    if (isLoading) return <Loading />;

    return (
        <div>
            <h3> Welcome back, {userInfo.username}!</h3>
            <Card className="account__details user-display container">
                <CardMedia
                    component="img"
                    image={userInfo.avatar_url}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Username: {userInfo.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Name: {userInfo.username}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button style={{ margin: "0 auto", display: "flex" }}>
                        <Link
                            className="account__details__links"
                            to={`/account/${userInfo.username}/articles`}
                        >
                            My Articles
                        </Link>
                    </Button>
                    <Button style={{ margin: "0 auto", display: "flex" }}>
                        <Link className="account__details__links" to="/">
                            My Comments
                        </Link>
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}
