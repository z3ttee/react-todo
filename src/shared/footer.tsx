import React from "react";

export class AppFooter extends React.Component {



    render() {
        return (
            <div className="block p-box w-full bg-gray-800 shadow-md">
                <div className="mx-auto container text-center">
                    {this.props["children"]}
                </div>
            </div>
        );
    }

}