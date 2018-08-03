/* @flow */
import React from 'react';

type HelloProps = {
    compiler: string;
    framework: string;
};

export default class Hello extends React.Component<HelloProps>{
    //Do stuff
    
    //Render
    render(){
        return(
            <div className='welcome'>
                Hello from {this.props.compiler} and {this.props.framework}!
                We use Flow that is a type checker for JavaScript...
            </div>
        );
    }
};

// ------ Use only for Flow test ------
/* export default function foo(x: ?number): string {
  if (x) {
    return x;
  }
  return "default string";
} */