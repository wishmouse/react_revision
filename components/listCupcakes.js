import React from 'react'

class ListCupcakes extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const items=this.props.items
    return(
      <ul>
        {this.props.items.map(function(items)
          {
            return <li>{items}</li>
          }
        )}
       </ul>
    )
  }
}


export default ListCupcakes
