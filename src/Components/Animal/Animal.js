import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPaw } from '@fortawesome/free-solid-svg-icons';
import './Animal.css';

const Animal = (props) => {
    const {name, species, img, age, origin, cost} = props.animal;
    const element = <FontAwesomeIcon icon={faPaw} />
    return(
        
        <div className="animals">
            <div>
            <img className="image" src={img}></img>
            <h3 className="text-primary">Name: {name}</h3>
            <h3>Species: {species}</h3>
            <h3>Age: {age}</h3>
            <h3>Origin: {origin}</h3>
            <h3>Visit cost: ${cost}</h3>
            <button 
           onClick={() => props.handleAddToVisit(props.animal)}
            className="btn"
            > {element} Add to visit list</button>
            </div>            
        </div>
       
    );
};

export default Animal;