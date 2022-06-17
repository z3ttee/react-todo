
// export function Clock(props) {
//     return <p>{props.date.toLocaleTimeString()}</p>
// }

import React from "react";

export interface ClockState {
    useDate?: Date;
}
export class Clock extends React.Component {

    private _interval: any;
    public state: ClockState;

    constructor(public props: ClockState) {
        super(props);

        // Assign initial values if
        // no date is provided.
        // if(typeof props.useDate == "undefined" || props.useDate == null) {
        this.state = {
            useDate: new Date()
        }
        // }
    }

    componentDidMount() {
        // Set an interval to update
        // the date every second.
        if(typeof this.props.useDate == "undefined" || this.props.useDate == null) {
            this._interval = setInterval(() => this.tick(), 1000);
        }
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
        return <p>{this.props.useDate?.toLocaleTimeString() || this.state.useDate?.toLocaleTimeString()}</p>
    }

}