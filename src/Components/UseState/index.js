//src/Components/UseState/index.js
import React from 'react';
import { useState } from 'react';

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {

  const [state, setState] = useState({
    value: '',
    error: false,
    loading: false
  });
/*   const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); */

  console.log(state.value);

  React.useEffect (() => {
    console.log('Effect started');
    
    if (!!state.loading) {
      setTimeout(() => {
        console.log('Performing validation');

        if ( state.value === SECURITY_CODE){
          setState({
            ...state,
            error: false,
            loading: false 
          });
        } else {
          setState({
            ...state,
            error: true,
            loading: false 
          })
        }

        console.log('Finishing validation');
      }, 3000);
    }
      console.log('Finishing effect');
  }, [state.loading])


  return (
    <div>
        <h2>Eliminate {name}</h2>

        <p>Please, write the security code.</p>

        { (state.error && !state.loading) &&
          (<p>Error: the code is incorrect</p>)}

        { state.loading && 
          (<p>Loading ...please wait</p>)}

        <input 
          placeholder="Security code"
          value={state.value}
          onChange={(event) => {
            setState({
              ...state,
              value:(event.target.value),
            });
          }}
        />
        <button 
          onClick={() => { 
            setState({
              ...state,
              loading: true,
              error: false,
            });
          }}

        >Verify</button>
    </div>
  );
}

export { UseState };