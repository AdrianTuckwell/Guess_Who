import React from 'react'

class Card extends React.Component{

render (){
    return (
      <div className="card">
        <img className='card-img' src={this.props.obj.image} alt="card"/>
      </div>
    )
  }
}         

export default Card