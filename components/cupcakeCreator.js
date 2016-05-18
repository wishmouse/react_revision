import React from 'react'
import { render } from 'react-dom'

class CupcakeCreator extends React.Component{
  constructor(props){
    super(props)
    this.state = {count : this.props.val}
  }

  render(){
    return(
      <div>
        <h1>{this.props.name}</h1> who can resist
          <div onClick={() => this.setState({count: this.state.count+1})}> CLICK TO VOTE:  {this.state.count} votes
          </div>
      </div>
      )
  }
}


export default CupcakeCreator
