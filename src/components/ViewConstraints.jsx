import React from 'react';


const ViewConstraints = ({ constraint, generateConstraint }) => {
    return (
        <div id="viewConstraints" className="hidden">
            <h2>Constraint</h2>
            <div id="constraintBox">{constraint}</div>
            <button class='customBtn' onClick={generateConstraint}>Get New Constraint</button>
        </div>
    )
}

export default ViewConstraints;