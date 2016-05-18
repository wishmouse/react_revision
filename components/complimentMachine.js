import React from 'react'
import { render } from 'react-dom'

class ComplimentMachine extends React.Component{
  constructor(props){
    super(props)
    this.state = {name : 'random stranger'}
  }

    handleInput(event){
      this.setState({
        name: event.target.value
      })
      console.log(event.target.value)
     }


  render(){
    return(
      <div>
        <input type="text" onChange={this.handleInput.bind(this)} />

        <h2>Hey {this.state.name} wanna</h2>

        <i>{this.props.compliment}</i>
      </div>
    )
  }
}

export default ComplimentMachine
