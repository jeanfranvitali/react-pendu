import React, { Component } from 'react';
import './App.css';
import Keyboard from './component/keyboard/Keyboard';
import SentencePanel from './component/sentence/SentencePanel';
import SentenceGenerator from './service/SentenceGenerator';
import Monitor from "./component/monitor/Monitor";


export default class App extends Component {

  state = {
    letter: '',
    sentence: [],
    remainingCharacterSet: [],
    mainKey: Date.now(), 
    matchedOrNot: 0
  }

  constructor(props) {
    super(props)
    const initialSentence = SentenceGenerator.provideNewSentence()
    this.state.sentence = initialSentence
    this.state.remainingCharacterSet = initialSentence.filter(elt=>elt!==" ")
  }

  notifyLetterChange = (letterChanged) => {
    const newRemainingCharacterList = this.state.remainingCharacterSet.filter(elt=>elt!==letterChanged)
    const matchedOrNot = this.state.remainingCharacterSet.length !== newRemainingCharacterList.length ? 1 : -1
    this.setState({ letter: letterChanged, remainingCharacterSet: newRemainingCharacterList, matchedOrNot: matchedOrNot})
  }

  reinit = () => {    
    const newSentence = SentenceGenerator.provideNewSentence()
    this.setState({letter: '', sentence: newSentence, remainingCharacterSet: newSentence.filter(elt=>elt!==" "), mainKey: Date.now(), matchedOrNot: 0 })
  }

  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            <tr>
              <SentencePanel key={this.state.mainKey} letter={this.state.letter} sentence={this.state.sentence} />
            </tr>
            <tr>
              <Keyboard notifyLetterChange={this.notifyLetterChange} />
            </tr>
            <tr>
              <Monitor win={this.state.remainingCharacterSet.length===0} callbackFn={this.reinit} matchedOrNot={this.state.matchedOrNot} />
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}