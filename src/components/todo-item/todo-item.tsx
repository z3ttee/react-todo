import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export class TodoItemEntity {
    public readonly id: string = uuidv4();

    constructor(
        public readonly title: string, 
        public readonly description: string
    ) {}
}

export function TodoItem(props) {
    const navigate = useNavigate();
    const handleSubmit = () => navigate("./view/"+props.item.id, { replace: true })

    return (
        <Card variant="outlined">
            <CardActionArea onClick={handleSubmit}>
                <CardContent>
                    <Typography variant="h6">{props.item.title}</Typography>
                    <Typography variant="body2">{props.item.description}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}