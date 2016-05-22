import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'

class Sliders2 extends React.Component{
  constructor(props){
    super(props)
    this.state = {  red : 0,
                    green: 0,
                    blue: 0
                 }
    this.update= this.update.bind(this)
  }

  update(e){
    this.setState({
                    red : ReactDOM.findDOMNode(this.refs.red).value,
                    green: ReactDOM.findDOMNode(this.refs.green).value,
                    blue: ReactDOM.findDOMNode(this.refs.blue).value
    })
  }

  render(){
    return(
      <div>
        <Sliders ref='red' update={this.update} />
          {this.state.red}<br />
          Ooey Gooey over Red
        <br />
        <br />
        <Sliders ref='green' update={this.update} />
          {this.state.green}<br />
          Squiggly Wiggley over Green
        <br />
        <br />
        <Sliders ref='blue' update={this.update} />
          {this.state.blue}<br />
          Lumpy bumpy over Blue
        <br />
       <br />

      </div>
    )
  }
}

class Sliders extends React.Component{
  render(){
    return(
          <input type='range'
          min='0'
          max='10'
          onChange={this.props.update} />
    )
  }
}




export default Sliders2

