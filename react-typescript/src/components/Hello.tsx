import React from 'react';
import { HelloProps } from '../types/HelloType';

class Hello extends React.Component <HelloProps, {}> {
    constructor(props: HelloProps) {
        super(props);
    }

    render() {
        return (
            <h1 className="welcome">
                <img src="../images/icon-home.png" alt="Home" />
                Hello from {this.props.compiler} and {this.props.framework}!
            </h1>
        );
    }
}

export default Hello;