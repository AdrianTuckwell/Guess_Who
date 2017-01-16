import React from 'react'

class Question extends React.Component{


  render (){
      return (
        <div className="question">
          <h4>{this.props.obj.question}</h4>
        </div>
      )
    }
  }         

  export default Question
