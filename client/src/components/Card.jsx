import React from 'react'

class Card extends React.Component{

render (){
    return (
      <div className="card">
        <h1>{this.props.obj.name}</h1>
      </div>
    )
  }
}         


export default Card