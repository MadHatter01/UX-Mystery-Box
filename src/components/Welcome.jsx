import React from 'react';

const Welcome = ({startSession}) => {
    return (
        <div id="home">
            <h1>UX Design Mystery Box</h1>
            <p>Welcome to the UX Design Mystery Box Activity. Click below to begin.</p>
            <button onClick={startSession}>Start Session</button>
        </div>
    )
}

export default Welcome;