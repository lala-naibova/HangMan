import React, {Component} from 'react';
import {randomWord} from './words'
import number1 from './images/0.jpg'
import number2 from './images/1.jpg'
import number3 from './images/2.jpg'
import number4 from './images/3.jpg'
import number5 from './images/4.jpg'
import number6 from './images/5.jpg'
import number7 from './images/6.jpg'

class Letter extends Component{

  static defaultProps = {
    wrongStep : 6,
    images : [number1,number2, number3, number4, number5, number6, number7]
  }
  constructor(props){
    super(props);
    this.state= { answer : randomWord(), quessedLetters: new Set(), mistake: 0};
    this.checkLetter = this.checkLetter.bind(this);
  }
  checkLetter(event){
    let curr = event.target.value;
    this.setState(st=>({
      quessedLetters : st.quessedLetters.add(curr),
      mistake: st.mistake + (st.answer.includes(curr)?  0 : 1)
    }))
  } 
  restart=()=>{
    this.setState({ answer : randomWord(), quessedLetters: new Set(), mistake: 0});
  }
guessedWord(){
  return this.state.answer.split('').map(lett=>(
    this.state.quessedLetters.has(lett)? lett : ' _ '
  ))
}
  generateButtons(){
    return 'qwertyuiopasdfghjklzxcvbnm'.split('').map(letter => (
<button key={letter}
        value= {letter}
        onClick = {this.checkLetter}
        disabled = {this.state.quessedLetters.has(letter)}> {letter}</button>
    ))
  }

render(){
  let status = this.generateButtons();
  let check = this.guessedWord();
  if (this.state.mistake === 6) {
    status='YOU ARE LOSER!!!!';   
  }
  if (this.state.answer === check.join('')) {
    status= 'YOU DID IT';   
  }
  
return(
  <div className='Hangman'>
<nav></nav>
<p >
<img src={this.props.images[this.state.mistake]}></img>
</p>
<p id='label'>Guess the dog type?</p>
<p className='Hangman-word text-center'>
  {check}
</p>
<p id='label'>{status}</p>
<button className='Hangman-reset' onClick={this.restart}>Restart</button>
  </div>
)
}
}
export default Letter;