import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { AppContent } from "../shared/content";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { selectItemById } from "../store/selectors/selectItem";
import { deleteById } from "../store/store";

export function AppViewItemView() {
    const dispatch = useAppDispatch();
    const { itemId } = useParams();
    const state = useAppSelector((state) => state);
    const item = selectItemById(state, itemId as string);
    const navigate = useNavigate();

    if(typeof item == "undefined" || item == null) {
        return <div className="flex flex-col items-center justify-center w-full h-full">
            <Typography variant="h3">404 Not Found</Typography>
            <Typography variant="body1">Could not find any item matching the given id of {itemId}</Typography>
        </div>
    }

    const _deleteById = () => {
        dispatch(deleteById(item.id));
        navigate("../", { replace: true });
    }

    return <AppContent>
        <Card variant="outlined">
            <CardContent>
                <Typography variant="body2" color="GrayText">ID: {item.id.toString()}</Typography>
                <Typography variant="h4">{item.title}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent:  "flex-end" }}>
                <Button variant="contained" color="primary">Bearbeiten</Button>
                <Button variant="text" color="error" onClick={_deleteById}>Löschen</Button>
            </CardActions>
        </Card>
        <Card variant="outlined" sx={{ marginTop: "12px" }}>
            <CardContent>
                <Typography variant="body1">{item.description}</Typography>
            </CardContent>
        </Card>
    </AppContent>
}