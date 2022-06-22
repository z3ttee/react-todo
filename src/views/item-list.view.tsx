import { Fab } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoItem } from "../components/todo-item/todo-item";
import { AppConfirmDialog } from "../dialogs/ConfirmDialog";
import { AppContent } from "../shared/content";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { deleteAll } from "../store/store";
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export function AppItemListView() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const items = useAppSelector((state) => state.list);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const _deleteAll = () => {
        dispatch(deleteAll());
        setDialogOpen(false)
    }

    const _createNewItem = () => {
      navigate("./create")
    }

    return (
        <AppContent>
          <div className='flex items-center justify-end w-full mb-6 gap-2'>
            <h3 className='flex-grow font-semibold'>Deine Liste</h3>

            <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => setDialogOpen(true)}>
              Alles löschen
            </Button>
          </div>
    
          <div className='flex flex-col gap-2 mt-6'>
            {items.map((item) => {
            return <TodoItem key={item.id} item={item} />
            })}
          </div>
          <AppConfirmDialog isOpen={isDialogOpen} onConfirm={(confirmed) => confirmed ? _deleteAll() : setDialogOpen(false)} />

          <Fab sx={{ position: "fixed", right: 24, bottom: 24 }} variant="extended" onClick={_createNewItem}>
            <AddIcon sx={{ mr: 1 }} />
            Create new
          </Fab>
        </AppContent>
      );
}