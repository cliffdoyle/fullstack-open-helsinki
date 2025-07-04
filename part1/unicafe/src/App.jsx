import { useState } from 'react'
import './App.css'

function App() {
  //Save clicks of each button to its own state
  const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Statistics</h1>
      <h3>Good FeedBack: {good}</h3>
      <h3>Neutral FeedBack: {neutral}</h3>
      <h3>Bad FeedBack: {bad}</h3>
      <div>
      <h1>Give Feedback</h1>
        <button onClick={()=>setGood(good+1)}>Good Button</button>
           <button onClick={()=>setNeutral(neutral+1)}>Neutral Button</button>
                      <button onClick={()=>setBad(bad+1)}>Bad Button</button>
      </div>

    
    </div>
  )
}

export default App
