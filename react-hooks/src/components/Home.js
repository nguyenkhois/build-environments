import React, { useState, useEffect } from 'react';

function Home() {
    const [today, setToday] = useState(null);

    useEffect(() => {
        setToday(new Date());
    });

    return (
        <div className="welcome">
            <img src="./images/icon-home.png" />
            <span> Welcome to the React Hooks project template by using pure JavaScript!</span>
            <p>{String(today)}</p>
            <p>View more information on <a href="https://github.com/nguyenkhois/build-environments" target="_blank"
                rel="noopener noreferrer">GitHub</a>.</p>
        </div>
    );
}
export default Home;