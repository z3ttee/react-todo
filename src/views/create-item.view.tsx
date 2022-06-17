import React from "react";
import { AppContent } from "../shared/content";
import { Link } from "react-router-dom";

export class AppCreateItemView extends React.Component {

    render() {
        return (
            <AppContent>
                <div className='flex items-center justify-end w-full mb-6 gap-2'>
                    <h3 className='flex-grow font-semibold'>Neues Item anlegen</h3>
                    <Link to="/create"><button className='py-2 px-4 rounded text-sm font-semibold border-2 border-sky-700 bg-sky-700 bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-100 transition-all will-change-transform transform-gpu active:scale-95'>Anlegen</button></Link>
                    <button className='py-2 px-4 rounded text-sm font-semibold border-2 border-red-400 bg-red-400 bg-opacity-20 hover:bg-opacity-40 active:bg-opacity-100 transition-all will-change-transform transform-gpu active:scale-95'>Alles löschen</button>
                </div>
            </AppContent>
        );
    }

}