import React from 'react'
import Card from '../components/Card'

const gameData = [
{id: 1, name: 'Homer' ,gender: 'Male', hair: 'Bald', image: '/imgs/homer.jpg'},
{id: 2, name: 'Bart' ,gender: 'Male', hair: 'Yellow', image: '/imgs/bart.jpg'},
{id: 3, name: 'Marge' ,gender: 'Female', hair: 'Blue', image: '/imgs/marge.jpg'},
{id: 4, name: 'Lisa' ,gender: 'Female', hair: 'Yellow', image: '/imgs/lisa.jpg'}
];

console.log (gameData[0].name)
class Game extends React.Component{

componentDidMount () {
  // console.log("Game.jsx - componentDidMount")
  // var url = "../data/simpsons.json";
  // var request = new XMLHttpRequest();
  //     request.open('GET', url);
  //     request.onload = function() {
  //       if(request.status === 200){
  //         var data = JSON.parse(request.responseText);
  //         this.setState({cards: data});
          
  //       }  
  //     }.bind(this);

 // return{data:gameData}
  }

render (){
    return (
      <div className="game-box">
        <h1>game box</h1>
        <Card obj={gameData[0]}/>
        <Card obj={gameData[1]}/>
        <Card obj={gameData[2]}/>
        <Card obj={gameData[3]}/>
      </div>
    )
  }
}         


export default Game