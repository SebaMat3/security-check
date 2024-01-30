import React from 'react';

class ClassState extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      error: false,
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminate {this.props.name}</h2>

        <p>Please, write the security code.</p>

        { this.state.error && 
          (<p>Error: the code is incorrect</p>)}

        <input placeholder="Security code" />
        <button
          onClick={() => this.setState({error: !this.state.error})}
        >Verify</button>
      </div>
    );
  }
}

export { ClassState };