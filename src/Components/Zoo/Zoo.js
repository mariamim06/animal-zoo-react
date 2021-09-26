import React, { useEffect, useState } from 'react';
import './Zoo.css';
import Animal from '../Animal/Animal';
import Visit from '../Visit/Visit';

const Zoo = () => {
    const [animals, setAnimals] = useState([]);
    const [visit, setVisit] = useState([]);

    useEffect( () => {
        fetch('./animals.JSON')
        .then(res => res.json())
        .then(data => setAnimals(data));
    }, [])

    const handleAddToVisit = (animal) => {
            console.log(animal.name);
            const newVisit = [...visit, animal];
            setVisit(newVisit);
    }

    return (
        <div className="zoo-container">
            <div className="animal-container">
                {/* <h3>Animals: {animals.length} </h3> */}
                <div className="grid">
                {
                        animals.map(animal => <Animal
                        key={animal.key}
                        animal={animal}
                        handleAddToVisit={handleAddToVisit}
                        ></Animal>)
                   
                }
                </div>
                )
            </div>

            <div className="visit-container">
               <Visit visit={visit}></Visit>
            </div>
        </div>
    )
};

export default Zoo;