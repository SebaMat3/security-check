import React from 'react';
import { useState } from 'react';

function UseState({ name }) {
  const [error, setError] = useState(true);
  return (
    <div>
        <h2>Eliminate {name}</h2>

        <p>Please, write the security code.</p>

        { error && 
          (<p>Error: the code is incorrect</p>)}

        <input placeholder="Security code"/>
        <button 
          onClick={() => setError(PrevState => (!PrevState))}
        >Verify</button>
    </div>
  );
}

export { UseState };