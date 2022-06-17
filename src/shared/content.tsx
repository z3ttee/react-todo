import React from "react";

export class AppContent extends React.Component {

    render() {
        return (
            <div className="mx-auto container h-full p-box">
                {this.props["children"]}
            </div>
        );
    }

}