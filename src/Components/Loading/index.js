//src/Components/Loading/index.js
import React from 'react';

class Loading extends React.Component {
  componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  render() {
    return (
        <p>Loading....</p>
    );
  }
}
export { Loading };