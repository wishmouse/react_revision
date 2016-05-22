import React from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'

class Mounting extends React.Component {
  constructor (){
    super()
    this.state = {val:10}
    this.update = this.update.bind(this)
  }
  update(){
    this.setState({val: this.state.val+1})
  }

  componentWillMount(){
    this.setState({m: 2})
    console.log('will mount')
  }

  render() {
    console.log('rendering')
      return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }

  componentDidMount(){
      this.increment = setInterval(this.update, 500)
  }

  componentWillUnmount(){
    clearInterval(this.increment)
  }
}

class Wrapper extends React.Component{
  constructor(){
    super();
  }
  mount(){
    ReactDOM.render(<Mounting />, document.getElementById('a'))
  }
  unmount(){
    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
  }
  render(){
    return(
      <div>
        <button onClick={this.mount.bind(this)}>MOUNT</button>
        <button onClick={this.unmount.bind(this)}>unMount</button>
        <div id='a'></div>
        <br />
      </div>
    )
  }
}

export default Wrapper
// export default Mounting
