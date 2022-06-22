import React from "react";
import { AppContent } from "../shared/content";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../store/hooks/hooks";
import { createItem } from "../store/store";
import { TodoItemEntity } from "../components/todo-item/todo-item";

export function AppCreateItemView() {
    const dispatch = useAppDispatch();
    
    function saveItem() {
        const item = new TodoItemEntity("1", "2");
        dispatch(createItem({
            id: item.id,
            title: item.title,
            description: item.description
        } as TodoItemEntity));
    }

    return (
        <AppContent>
            <div className='flex items-center justify-end w-full mb-6 gap-2'>
                <h3 className='flex-grow font-semibold'>Neues Element anlegen</h3>
                <Link to="/"><button className='py-2 px-4 rounded text-sm font-semibold border-2 border-slate-800 bg-slate-800 bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-100 transition-all will-change-transform transform-gpu active:scale-95'>Abbrechen</button></Link>
                <button onClick={saveItem} className='py-2 px-4 rounded text-sm font-semibold border-2 border-green-400 bg-green-400 bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-100 transition-all will-change-transform transform-gpu active:scale-95'>Speichern</button>
            </div>
        </AppContent>
    );
}