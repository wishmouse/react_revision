import React from 'react'

class ListCupcakes extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const items=this.props.items
    return(
      <ul>
        {this.props.items.map(function(items, i)
          {
            return <li key={i}>{items}</li>
          }
        )}
       </ul>
    )
  }
}


export default ListCupcakes
