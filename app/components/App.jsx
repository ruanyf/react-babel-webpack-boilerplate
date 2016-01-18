import React from 'react';
import Header from './Header.jsx';

import '../sass/Main.sass';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='start-bg'>
            <Header />
            <h1>Hello World</h1>
            </div>
        );
    }
}

