import React from 'react';
import { HomeProps } from '../types/HomeType';

/* 
... extends React.Component <props, state> {...}
-> 'HomeProps' describes the shape of props.
-> State is never set so we use the '{}' type.
*/

class Home extends React.Component <HomeProps, {}> {
    constructor(props: HomeProps) {
        super(props);
    }

    render() {
        return (
            <div className="welcome">
                <img src="./images/icon-home.png" alt="Home" />
                <span>Welcome to the project template by using {this.props.framework} and {this.props.compiler}!</span>
                <p>View more information and other project templates on <a href="https://github.com/nguyenkhois/build-environments" target="_blank"
                rel="noopener noreferrer">GitHub</a>.</p>
            </div>
        );
    }
}

export default Home;