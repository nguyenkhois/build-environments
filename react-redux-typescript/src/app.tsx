import * as React from "react";
import { Hello } from './hello';

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class App extends React.Component<{}> {
    render() {
        return (
            <Hello compiler="TypeScript" framework="React"/>
        );
    }
}