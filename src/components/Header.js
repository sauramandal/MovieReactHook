import React, {Fragment} from "react";

const Header = props => {
    return (
        <Fragment>
            <header className="App-header">
            <h2>{props.text}</h2>
            </header>
        </Fragment>
    );
};

export default Header;