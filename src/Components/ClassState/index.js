//src/Components/ClassState/index.js
import React from 'react';
import { Loading } from '../Loading';

const SECURITY_CODE = 'paradigma'


class ClassState extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      error: false,
      loading: false,
      value:'',
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
        
        if ( SECURITY_CODE !== this.state.value ){
          this.setState({ error: true, loading: false})
        }
        this.setState({ loading: false})
      
      console.log("Loading success");
    }, 3000)
  }
}

render() {
  const {error, loading, value} = this.state;

  return (
      <div>
        <h2>Eliminate {this.props.name}</h2>

        <p>Please, write the security code.</p>

        { error && !loading
          (<p>Error: the code is incorrect</p>)}

        { loading && 
          (<Loading/>)}

        <input 
          placeholder="Security code"
          onChange={(event) => {
            this.setState({value: event.target.value});
          }}
          value={value} 
        />

        <button
          onClick={() => this.setState({ loading:true })}
          //this.setState({error: !this.state.error}) && 
          //onClick={() => this.setState(prevState => ({error: !prevState}))} 
        >Verify</button>
      </div>
    );
  }
}

export { ClassState };