import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";

export default function ArticleCardHeader({ author, created, topic, title }) {
    return (
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="author">
                    {author[0].toUpperCase()}
                </Avatar>
            }
            title={title}
            subheader={`${author} posted on: ${created.slice(
                0,
                16
            )} in ${topic}`}
        />
    );
}
