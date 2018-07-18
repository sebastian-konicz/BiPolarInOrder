import React from "react";

class Header extends React.Component {
    render() {
        return <header className="header container">
            <div className="titleBi col-6"><h1>bipolar</h1></div>
            <div className="titleIn col-6"><h1>inorder</h1></div>
        </header>
    }
}

export {Header}