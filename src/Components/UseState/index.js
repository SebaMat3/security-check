//src/Components/UseState/index.js
import React from 'react';
import { useState } from 'react';

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {

  const onConfirm = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true,
    });
  }
  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false 
    });
  }
  const onWrite = (newValue) => {
    setState({
      ...state,
      value:(newValue),
    });
	}
	const onCheck = () => {
    setState({
      ...state,
      loading: true,
      error: false,
    });
	}
  const onDelete = () => {
    setState({
      ...state,
      deleted: true,
    })
	}
  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: '',
    })
	}



  const [state, setState] = useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

  console.log(state.value);

  React.useEffect (() => {
    console.log('Effect started');
    
    if (!!state.loading) {
      setTimeout(() => {
        console.log('Performing validation');

        if ( state.value === SECURITY_CODE){
          onConfirm();
        } else {

        onError();
        }

        console.log('Finishing validation');
      }, 3000);
    }
      console.log('Finishing effect');
  }, [state.loading])


  if ( !state.confirmed && !state.deleted ) {
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
              onWrite(event.target.value);
            }}
          />
          <button 
            onClick={() => { 
              onCheck();
            }}
  
          >Check</button>
      </div>
    );

  } else if ( !!state.confirmed && !state.deleted ) {
    return (
      <React.Fragment>
        <p>Please confirm delete.</p>

        <button
          onClick={() => {
            onDelete();
          }}
        > Accept
        </button> 

        <button 
          onClick={() => {
            onReset();
          }}
        >Cancel
        </button>
        
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p>Succesful delete!</p>
          <button
            onClick={() => {
              onReset();
          }}> Reload </button> 
      </React.Fragment>
    )
  }
}

export { UseState };