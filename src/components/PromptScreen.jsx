import React from 'react';

const PromptScreen = ({ prompt, generatePrompt, nextRound }) => {
    return (
        <div id="promptScreen" style={{marginBottom:'5rem'}}>
            <h2>Your Prompt</h2>
            <div id="promptBox">{prompt.product ? (<>
                <p><strong>Product:</strong> {prompt.product}</p>
                <p><strong>Audience:</strong> {prompt.audience}</p>
                <p><strong>Twist:</strong> {prompt.twist}</p>
            </>): ("Click to get a prompt")}
            </div>
            <button onClick={generatePrompt}>Get New Prompt</button>
            {/* <button onClick={nextRound}>View Constraints</button> */}
        </div>
    )
}

export default PromptScreen;