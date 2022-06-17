import React from "react";
import { NestedClock } from "../components/clock/nested-clock";

export class AppHeader extends React.Component {

    render() {
        return (
            <div className="flex flex-1 items-center w-full p-box bg-gray-800 shadow-md">
                <h1 className='font-black text-xl uppercase flex-grow'>{ this.props.title || "React TODO Demo"}</h1>
                <div className='inline-flex'><NestedClock /></div>
            </div>
        );
    }

}