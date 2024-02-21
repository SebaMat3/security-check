import React from 'react';
import { useState } from 'react';

//Component using react hooks
function UseState({ name }) {
  const [error, setError] = useState(true);
  const [loading, setLoading] = useState(false);

  React.useEffect (() => {
    console.log('Effect started');
    
    if (!!loading) {
      setTimeout(() => {
        console.log('Performing validation');
        setLoading(false);
        console.log('Finishing validation');
      }, 4000);
    }
  
      console.log('Finishing effect');
  }, [loading])


  return (
    <div>
        <h2>Eliminate {name}</h2>

        <p>Please, write the security code.</p>

        { error && 
          (<p>Error: the code is incorrect</p>)}

        { loading && 
          (<p>Loading ...please wait</p>)}

        <input placeholder="Security code"/>
        <button 
          onClick={() => setLoading(true) && setError(!error)}
        >Verify</button>
    </div>
  );
}

export { UseState };