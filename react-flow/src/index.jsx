// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import css from './styles.css';

import Hello from './Hello';

const root = document.getElementById('root');
if (root) {
    ReactDOM.render(
        <Hello compiler="Pure JavaScript" framework="React" />,
        root
    );
}
