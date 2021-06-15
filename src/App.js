import React from 'react';
import CakeContainer from './cakeContainer';
import IceContaner from './IceContaner';
import UsersContainer from './UsersContainer'



function App() {
  return (
    <div>
    <CakeContainer ></CakeContainer>
      <IceContaner ice={"iceCream"}></IceContaner>
      <UsersContainer></UsersContainer>
    </div>

  )
}

export default App;
