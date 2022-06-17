
// export function Clock(props) {
//     return <p>{props.date.toLocaleTimeString()}</p>
// }

import React from "react";
import { Clock } from "./clock";

export class NestedClock extends React.Component {

    _interval;

    constructor(props) {
        super(props);
        
        // Assign initial values
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        // Set an interval to update
        // the date every second.
        this._interval = setInterval(() => this.tick(), 1000);
    }

    tick() {
        // this.setState({
        //     ...this.state,
        //     date: new Date()
        // });

        // React automatically 
        // merges the state
        this.setState({
            date: new Date()
        })
    }

    componentWillUnmount() {
        // Clear the interval
        clearInterval(this._interval);
    }

    render() {
        return <Clock useDate={this.state["date"]} />
    }

}