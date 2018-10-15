/* @flow */
import React from 'react';
import Hello from './hello';

export default class App extends React.Component<{}>{
    //Do stuff
    
    //Render
    render(){
        return(
            <Hello language="Pure JavaScript" framework="React"/>
        );
    }
};

// ------ Use only for Flow test ------
/* export function foo(x: ?number): string {
    if (x) {
        return x;
    }
    return "default string";
} */
