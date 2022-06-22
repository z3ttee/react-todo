import { useState } from "react";
import { Link } from "react-router-dom";
import { TodoItem } from "../components/todo-item/todo-item";
import { AppConfirmDialog } from "../dialogs/ConfirmDialog";
import { AppContent } from "../shared/content";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { deleteAll } from "../store/store";

export function AppItemListView() {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const items = useAppSelector((state) => state.list);
    const dispatch = useAppDispatch();

    const _deleteAll = () => {
        dispatch(deleteAll());
        setDialogOpen(false)
    }

    return (
        <AppContent>
          <div className='flex items-center justify-end w-full mb-6 gap-2'>
            <h3 className='flex-grow font-semibold'>Deine Liste</h3>
            <Link to="/create"><button className='py-2 px-4 rounded text-sm font-semibold border-2 border-sky-700 bg-sky-700 bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-100 transition-all will-change-transform transform-gpu active:scale-95'>Anlegen</button></Link>
            <button onClick={() => setDialogOpen(true)} className='py-2 px-4 rounded text-sm font-semibold border-2 border-red-400 bg-red-400 bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-100 transition-all will-change-transform transform-gpu active:scale-95'>Alles löschen</button>
          </div>
    
          <div className='flex flex-col gap-2 mt-6'>
            {items.map((item) => {
            return <TodoItem key={item.id} item={item} />
            })}
          </div>
          <AppConfirmDialog isOpen={isDialogOpen} onConfirm={(confirmed) => confirmed ? _deleteAll() : setDialogOpen(false)} />
        </AppContent>
      );
}