//src/Components/UseReducer.js
import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

const SECURITY_CODE = 'paradigma'

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  /* Semi declarative methods    
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
      } */

  console.log(state.value);

  React.useEffect(() => {
    console.log('Effect started');

    if (!!state.loading) {
      setTimeout(() => {
        console.log('Performing validation');

        if (state.value === SECURITY_CODE) {
          dispatch({ type: 'CONFIRM' });
        } else {
          dispatch({ type: 'ERROR' });
        }

        console.log('Finishing validation');
      }, 3000);
    }
    console.log('Finishing effect');
  }, [state.loading])


  if (!state.confirmed && !state.deleted) {
    return (
      <div>
        <h2>Eliminate {name}</h2>

        <p>Please, write the security code.</p>

        {(state.error && !state.loading) &&
          (<p>Error: the code is incorrect</p>)}

        {state.loading &&
          (<p>Loading ...please wait</p>)}

        <input
          placeholder="Security code"
          value={state.value}
          onChange={(event) => {
            dispatch({ type: 'WRITE', payload: event.target.value });
          }}
        />
        <button
          onClick={() => {
            dispatch({ type: 'CHECK'});
          }}

        >Check</button>
      </div>
    );

  } else if (!!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Please confirm delete.</p>

        <button
          onClick={() => {
            dispatch({ type:'DELETE' });
          }}
        > Accept
        </button>

        <button
          onClick={() => {
            dispatch({ type:'RESET' });
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
            dispatch({ type:'RESET' });;
          }}> Reload </button>
      </React.Fragment>
    )
  }
}


const initialState = {
  value: '',
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,

}

const reducerObject = (state, payload) => ({
  'CONFIRM': {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  'ERROR': {
    ...state,
    error: true,
    loading: false,
  },
  'WRITE': {
    ...state,
    value: payload,
  },
  'CHECK': {
    ...state,
    loading: true,
  },
  'DELETE': {
    ...state,
    deleted: true,
  },
  'RESET': {
    ...state,
    confirmed: false,
    deleted: false,
    value: '',
  }
});

const reducer = (state, action) => {
  if (reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};


export { UseReducer };