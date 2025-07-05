import { useState } from 'react'



function Statistics({props}){
  const {good,neutral,bad,all,average,positiveFeedback}=props
  console.log('props from App',good)

  if (good !=0 || neutral != 0 || bad !=0 || all !=0){

    return(
      <div>
  
        <h1>Statistics</h1>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positiveFeedback" value ={positiveFeedback}/>
        </div>
  
    )
  }else{
    return(
      <div>
        <h1>Statistics</h1>
        <h3>Please give feedback first</h3>

      </div>
    )

    
  }


}

const StatisticLine=({text,value})=>{
  console.log(text, value)
  return (
    <div>
      <h3>{text} {value}</h3>


    </div>
  )

}
const Button=({stats:{good,bad,neutral}, setters:{setGood,setBad,setNeutral}})=>{

  return (
    <div>
      <button onClick={()=>setGood(good+1)}>Good Button</button>
      <button onClick={()=>setNeutral(neutral+1)}>Neutral Button</button>
      <button onClick={()=>setBad(bad+1)}>Bad Button</button>

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
      <div>
      <h1>Give Feedback</h1>
      <Button stats={{good,neutral,bad}} setters={{setGood,setBad,setNeutral}}/>
      <Statistics props={{good,neutral,bad,all,average,positiveFeedback}}/>
      </div>
    </div>
  )
}

export default App
