import React from 'react';
import './Visit.css';

const Visit = (props) => {
    const { visit } = props;
    let total = 0;
    for (const animal of visit){
        total = total + animal.cost;
    }
    return (
        <div className="visit">
        <h2 className="visit-title">Counter for Visit</h2>
        <h3>Animals selected: {props.visit.length}</h3>
        <h3>Total cost: ${total} </h3>
        </div>
    );
};

export default Visit;
