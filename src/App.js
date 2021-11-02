import React, { useState } from 'react';
import Pets from './components/newPets/Pets';
import NavBar from './components/navigation/NavBar';
import PetsList from './components/newPets/PetsList';
 function App () {
   const [petList, setPetList] = useState([]);
  const newPetHandler = (petName, ownerName, OwnerEmail) => {};
    setPetList({})
  return(
   <div className="content">
       <NavBar />
       <Pets onNewPet={newPetHandler} />
       <PetsList pets={petList}/>
     </div>
  );
}

export default App;

