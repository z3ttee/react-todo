import React from "react";



// Create components like functions
export function HelloWorldFn(props) {
    return <h1>Hello, {props.name}</h1>;
}



// ES6 Style component declaration
export class HelloWorld extends React.Component {

    public render(): JSX.Element {
        return <h1>Hello, {this.props["name"]}</h1>
    }

}