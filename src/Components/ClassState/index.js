import React from 'react';
import { Loading } from '../Loading';

//Component from class
class ClassState extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      error: false,
      loading: true
    }
  }

/*   componentWillUnmount(){
    console.log('componentWillUnmount')
  }
  componentDidMount(){
    console.log('componentDidMount')
  }
  UNSAFE_componentWillMount() {
    console.log('componentWillMount')
  } */
  componentDidUpdate(){
    if(!!this.state.loading){
      setTimeout(() => {
        console.log("Loading...");

        this.setState({ loading: false})
        
        console.log("Loading success");
      }, 3000)
    }
  }

  render() {
    return (
      <div>
        <h2>Eliminate {this.props.name}</h2>

        <p>Please, write the security code.</p>

        { this.state.error && 
          (<p>Error: the code is incorrect</p>)}

        { this.state.loading && 
          (<Loading/>)}

        <input placeholder="Security code" />
        <button
          onClick={() => this.setState({ loading:false })}
          //this.setState({error: !this.state.error}) && 
          //onClick={() => this.setState(prevState => ({error: !prevState}))} 
        >Verify</button>
      </div>
    );
  }
}

export { ClassState };