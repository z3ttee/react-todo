import React from "react";

export class AppContent extends React.Component {

    render() {
        return (
            <div className="w-full h-full p-box">
                {this.props["children"]}
            </div>
        );
    }

}