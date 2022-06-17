import React from "react";
import { NestedClock } from "../components/clock/nested-clock";

export interface AppHeaderProps {
    title: string;
}
export class AppHeader extends React.Component {

    constructor(public props: AppHeaderProps) {
        super(props);
    }

    render() {
        return (
            <div className="block bg-gray-800 shadow-md">
                <div className="mx-auto container flex flex-1 items-center p-box">
                    <h1 className='font-black text-xl uppercase flex-grow'>{ this.props.title || "React TODO Demo"}</h1>
                    <div className='inline-flex'><NestedClock /></div>
                </div>
            </div>
        );
    }

}