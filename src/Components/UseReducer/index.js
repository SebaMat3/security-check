//src/Components/UseReducer.js
import React from 'react';

const SECURITY_CODE = 'paradigma'

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  /* Action creators, leveraging implicit return for cleaner code*/
    const onConfirm = () => dispatch({ type: actionTypes.confirm })
    const onError = () => dispatch({ type: actionTypes.error})
    const onCheck = () => dispatch({ type: actionTypes.check})
    const onDelete = () => dispatch({ type: actionTypes.delete})
    const onReset = () => dispatch({ type: actionTypes.reset})
    
    
    const onWrite = ({ target : {value} }) => {
      dispatch({ type: actionTypes.write, payload:value })
     /*  setState({
        ...state,
        value:(newValue),
      }); */
    }

  console.log(state.value);

  React.useEffect(() => {
    console.log('Effect started');

    if (!!state.loading) {
      setTimeout(() => {
        console.log('Performing validation');

        if (state.value === SECURITY_CODE) {
          /* dispatch({ type: actionTypes.confirm }); */
          onConfirm();

        } else {
          /* dispatch({ type: actionTypes.error }); */
          onError();
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
          onChange={onWrite}
        />
        <button
          onClick={onCheck}
        >Check</button>
      </div>
    );

  } else if (!!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <p>Please confirm delete.</p>

        <button
          onClick={onDelete}
        > Accept
        </button>

        <button
          onClick={onReset}
        >Cancel
        </button>

      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <p>Succesful delete!</p>
        <button
          onClick={onReset}> Reload </button>
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

const actionTypes = {
  confirm : 'CONFIRM',
  error : 'ERROR',
  write : 'WRITE',
  check : 'CHECK',
  delete : 'DELETE',
  reset : 'RESET',
}

const reducerObject = (state, payload) => ({
  [actionTypes.confirm]: {
    ...state,
    error: false,
    loading: false,
    confirmed: true,
  },
  [actionTypes.error]: {
    ...state,
    error: true,
    loading: false,
  },
  [actionTypes.write]: {
    ...state,
    value: payload,
  },
  [actionTypes.check]: {
    ...state,
    loading: true,
  },
  [actionTypes.delete]: {
    ...state,
    deleted: true,
  },
  [actionTypes.reset] : {
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