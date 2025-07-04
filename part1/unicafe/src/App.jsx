import { useState } from 'react'




function Statistics({props}){
  const {good,neutral,bad,all,average,positiveFeedback}=props
  console.log('props from App',good)

  return(
    <div>
      <h1>Statistics</h1>
      <h3>Good FeedBack: {good}</h3>
      <h3>Neutral FeedBack: {neutral}</h3>
      <h3>Bad FeedBack: {bad}</h3>
      <h3>All: {all}</h3>
      <h3>Average: {average}</h3>
      <h3>Positive Feedback:{positiveFeedback}%</h3>
      </div>

  )

}



function App() {
  //Save clicks of each button to its own state
  const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const all=good+bad+neutral
    const average=(good*1 + neutral*0 + bad*-1)/all
    const positiveFeedback=(good/all)*100

  return (
    <div>
      <Statistics props={{good,neutral,bad,all,average,positiveFeedback}}/>
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
