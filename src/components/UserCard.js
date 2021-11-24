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
            <CardActionArea onClick={handleClick}>
                <CardMedia className="account__select-icon" alt="user-icon">
                    <PersonIcon />
                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Username: {username}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
