import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './components/Welcome';
import PromptScreen from './components/PromptScreen';
import ViewConstraints from './components/ViewConstraints';

function App() {
  const prompts = [
    { product: "Habit Tracker", audience: "Busy professionals", twist: "Must be designed for 1-minute daily interactions" },
    { product: "Language Learning App", audience: "Elementary school students", twist: "Interactive and gamified for better engagement" },
    { product: "Meditation App", audience: "University students", twist: "Designed for use in noisy environments" },
    { product: "Online Bookstore", audience: "Elderly users", twist: "Accessible and optimized for voice commands" },
    { product: "Food Recipe Finder", audience: "People with dietary restrictions", twist: "Supports filtering by voice commands" },
    { product: "Exercise Tracking App", audience: "Fitness beginners", twist: "Includes a progress tracker with rewards" },
    { product: "Virtual Pet Care App", audience: "Kids ages 5-10", twist: "Teaches empathy through pet interactions" },
    { product: "Grocery Shopping List", audience: "Large households", twist: "Synchronizes and shares lists in real-time" },
    { product: "Career Mentorship Platform", audience: "Recent graduates", twist: "Offers personalized guidance based on interests" },
    { product: "Budget Planner", audience: "University students", twist: "Allows quick overview of weekly spending in 5 seconds" },
    { product: "Sleep Tracking App", audience: "Shift workers", twist: "Designed to work around unusual sleep patterns" },
    { product: "Art Portfolio Builder", audience: "Freelance artists", twist: "Optimized for mobile and easy sharing" },
    { product: "Interactive Museum Guide", audience: "Museum visitors", twist: "Offers augmented reality (AR) views of exhibits" },
    { product: "Digital Recipe Organizer", audience: "Home cooks", twist: "Allows for ingredient substitution recommendations" },
    { product: "Climate Awareness App", audience: "Teens and young adults", twist: "Gamified with daily eco-friendly challenges" },
  ];
  
  
  const constraints = [
    "Must be accessible for visually impaired users",
    "Include a social feature for collaboration",
    "Optimize for low-bandwidth environments",
    "Use only two primary colors in the interface",
    "Must be fully functional offline",
    "Design for a single-handed user experience",
    "Include a progress indicator on every screen",
    "Prioritize animations for key interactions",
    "Make it usable without any text input",
    "Optimize for users in a high-stress environment",
    "Integrate a rewards or gamification element",
    "Ensure it works on a smartwatch interface",
    "Adapt it for use by non-tech-savvy users",
    "Add a feature that works with voice-only control",
    "Design with a dark mode as the default appearance"
  ];
  
  const [screen, setScreen] = useState('home');
  const [prompt, setPrompt] = useState(prompts[0]);
  const [constraint, setConstraint] = useState(constraints[0]);
  const [activity, setActivity] = useState(false)

  const startSession = () =>{
    setScreen('promptScreen');
    setActivity(true)
  }

  const generatePrompt = ()=>{
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(randomPrompt);
  }

  const generateConstraint = () =>{
    const randomConstraint = constraints[Math.floor(Math.random() * constraints.length)];
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
