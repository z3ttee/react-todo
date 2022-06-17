import React from "react";

export class AppFooter extends React.Component {



    render() {
        return (
            <div className="flex flex-col items-center p-box w-full bg-gray-800 shadow-md">
                {this.props["children"]}
            </div>
        );
    }

}