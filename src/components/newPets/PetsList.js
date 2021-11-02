import React from 'react';
import "./PetsList.css";
const PetsList = (props) => {
    return (
    <div>
        {props.pets.map((pet) =>{
            return <div className="blog-preview">
             <h2>{pet.petName}</h2>
             <p>{pet.ownerName}</p>
             <p>{pet.ownerEmail}</p>
             </div>;
        }) }</div>
        )
}

export default PetsList;
