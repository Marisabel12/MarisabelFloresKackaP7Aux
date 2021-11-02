import React, { useState} from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';

const Pets = (props) => {
    const [petName, SetPetName] = useState("");
    const [ownerName, SetOwnerName] = useState("");
    const [OwnerEmail, SetOwnerEmail] = useState("");
    
    const petNameHandler =(event) => {
        console.log(event.target.value);
        SetPetName(event.target.value) ;
    };
    const ownerNameHandler =(event) => {
        SetOwnerName(event.target.value) ;
    };
    const OwnerEmailHandler =(event) => {
        SetOwnerEmail(event.target.value) ;
    };
    const submitHandler = (event) => {
        event.preventDefault();
        props.onNewPet(petName, ownerName, OwnerEmail);
    };
    return  (
    <React.Fragment>
    <Card>
    <form onSubmit={submitHandler} >
    <label>Pet Name</label>
    <input type="text" onChange={petNameHandler} />
    <label>Owner Pet</label>
    <input type="text" onChange={ownerNameHandler} />
    <label>Owner Email</label>
    <input type="text" onChange={OwnerEmailHandler} />
    <Button>Crear</Button>
    </form>  
</Card>
<p>Soy {ownerName} ({OwnerEmail}) y mi mascota es {petName} </p>
</React.Fragment>
);
};
export default Pets;
