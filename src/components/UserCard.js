import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    CardActionArea,
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";

export default function UserCard({ username, loginUser }) {
    const handleClick = () => {
        loginUser(username);
    };
    return (
        <Card className="account__details" sx={{ maxWidth: 345 }}>
            <CardActionArea
                className="account__details__button"
                onClick={handleClick}
            >
                <CardMedia className="account__select-icon" alt="user-icon">
                    <PersonIcon />
                </CardMedia>
                <CardContent>
                    <Typography
                        className="account__select-username"
                        variant="h5"
                    >
                        {username}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
