/* @flow */
import React from 'react';

type HelloProps = {
    language: string;
    framework: string;
};

export default class Hello extends React.Component<HelloProps>{
    //Do stuff
    
    //Render
    render(){
        return(
            <div className='welcome'>
                Message from Hello component by using {this.props.language} and {this.props.framework}!
                Flow is a type checker for JavaScript.
            </div>
        );
    }
};