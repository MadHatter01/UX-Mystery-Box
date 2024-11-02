import { useState } from 'react'
import './App.css'
import Welcome from './components/Welcome';
import PromptScreen from './components/PromptScreen';
import ViewConstraints from './components/ViewConstraints';
import { Prompts, Constraints } from './data';



function App() {

  

  
  const [screen, setScreen] = useState('home');
  const [prompt, setPrompt] = useState(Prompts[0]);
  const [constraint, setConstraint] = useState(Constraints[0]);
  const [activity, setActivity] = useState(false)

  const startSession = () =>{
    setScreen('promptScreen');
    setActivity(true)
  }

  const generatePrompt = ()=>{
    const randomPrompt = Prompts[Math.floor(Math.random() * Prompts.length)];
    setPrompt(randomPrompt);
  }

  const generateConstraint = () =>{
    const randomConstraint = Constraints[Math.floor(Math.random() * Constraints.length)];
    setConstraint(randomConstraint);
  }

  const nextRound = () =>{
    setScreen('viewConstraints');
  }

  return (
    <>
    <div>
      {screen === 'home' && <Welcome startSession={startSession} />}
      {activity && (
        <div className='view'>
        <PromptScreen prompt={prompt} generatePrompt={generatePrompt} nextRound={nextRound}/>
        <ViewConstraints constraint={constraint} generateConstraint={generateConstraint} />
        </div>
      )}
      {/* {screen === 'promptScreen' && <PromptScreen prompt={prompt} generatePrompt={generatePrompt} nextRound={nextRound}/>}
      {screen === 'viewConstraints' && (
    
      )} */}
    </div>

    </>
  )
}

export default App
