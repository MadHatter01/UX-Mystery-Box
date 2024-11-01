import React from 'react';


const ViewConstraints = ({ constraint, generateConstraint }) => {
    return (
        <div id="viewConstraints" className="hidden">
            <h2>Constraint Round</h2>
            <div id="constraintBox">{constraint}</div>
            <button onClick={generateConstraint}>Get New Constraint</button>
        </div>
    )
}

export default ViewConstraints;