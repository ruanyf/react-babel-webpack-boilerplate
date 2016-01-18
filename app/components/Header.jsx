import React from 'react';

import '../sass/Header.sass';



export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
            <div>
            <h1>this is the header </h1>
            </div>
            </header>
        );
    }
}

