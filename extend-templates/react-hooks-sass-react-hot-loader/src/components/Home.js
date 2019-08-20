import React, { useState, useEffect } from 'react';

function Home() {
    const [today, setToday] = useState(null);

    useEffect(() => {
        setToday(new Date());
    },[]);

    return (
        <div className="welcome">
            <img src="./images/icon-home.png" />
            <span> Welcome to the React Hooks - SASS project template!</span>
            <p>{String(today)}</p>
            <ul>
                <li>React Hooks</li>
                <li>React Router</li>
                <li>SASS</li>
                <li>Babel</li>
                <li>react-hot-loader</li>
                <li>react-app-polyfill</li>
                <li>BrowserSync</li>
                <li>ESLint</li>
                <li>optimize-css-assets-webpack-plugin</li>
                <li>terser-webpack-plugin</li>
                <li>... many more</li>
            </ul>
            <p>View more information and other project templates on <a href="https://github.com/nguyenkhois/build-environments" target="_blank"
                rel="noopener noreferrer">GitHub</a>.</p>
        </div>
    );
}
export default Home;