import { useState } from 'react'
import './App.css'
import MyHeader from './components/MyHeader'
import WordInput from './components/WordInput'
import VowelFinder from './components/VowelFinder'

function App() {

  //state value
  const [word, setWord] = useState("") //this function takes in one input and returns a list of two outputs 

  //event handler
  const onSubmitWord = (newWord) => {
      setWord(newWord) //update our 'word' value via this updating function (so React knows about this update)
    };

  //render
  return (
    <div className="App">
      <MyHeader text="Find the Vowels"/>
      <WordInput functionToCallWhenButtonIsClicked={ onSubmitWord } />
      <VowelFinder word={ word }/>
    </div>
  );

};

export default App
