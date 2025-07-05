import { useState } from 'react'



function Statistics({props}){
  const {good,neutral,bad,all,average,positiveFeedback}=props
  console.log('props from App',good)

  if (good !=0 || neutral != 0 || bad !=0 || all !=0){

    return(
      <div>
  
        <h1>Statistics</h1>
       <table>
        <tbody>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="all" value ={all} />
      <StatisticLine text="average" value ={average} />
      <StatisticLine text="positiveFeedback" value ={positiveFeedback}/>
      </tbody>
      </table>
      
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
     <tr>
      <td><h3>{text}</h3> </td>
      <td>{value}</td> 
      </tr>    
    
     
    </div>
  )

}
const Button=({stats:{good,bad,neutral,anecdotes,selected,allvotes}, setters:{setGood,setBad,setNeutral,setSelected,setAllvotes}})=>{
 
  const handleAnecdote=()=>{
    const randIndex=Math.floor(Math.random()*anecdotes.length)
    setSelected(randIndex)

  }

  const handleVote=()=>{
    const updatedVotes=[...allvotes]
    updatedVotes[selected]+=1
    setAllvotes(updatedVotes)
  }

  console.log('votes in Button component',allvotes)

  return (
    <div>
      <button onClick={()=>setGood(good+1)}>Good Button</button><br/>
      <button onClick={()=>setNeutral(neutral+1)}>Neutral Button</button><br/>
      <button onClick={()=>setBad(bad+1)}>Bad Button</button><br/>
      <button onClick={handleAnecdote}>next necdote</button>
      <button onClick={handleVote}>vote</button>

    

    </div>
  )

}




function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  //Save clicks of each button to its own state
  let [selected, setSelected] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [vote, setVote]=useState(0)
  const [allvotes,setAllvotes]=useState(Array(anecdotes.length).fill(0))

  const all=good+bad+neutral
  const average=(good*1 + neutral*0 + bad*-1)/all
  const positiveFeedback=(good/all)*100 

 

  //Generating random index
  // selected = Math.floor(Math.random()*anecdotes.length)

  //Access a random anecdote
  // let displaySelected = anecdotes[selected]
  console.log('Selected',anecdotes[selected])
  const maxVotes=Math.max(...allvotes)
  const maxIndex=allvotes.indexOf(maxVotes)
  const anecdoteWithMaxVotes=anecdotes[maxIndex]
  return (
    <div>
      <div>
      <h1>Give Feedback</h1>
      <Button stats={{good,neutral,bad,selected,anecdotes,vote,allvotes}} setters={{setGood,setBad,setNeutral,setSelected,setVote,setAllvotes}}/>
      <Statistics props={{good,neutral,bad,all,average,positiveFeedback}}/>
      <h1>{anecdotes[selected]}</h1>
      <h4>has {allvotes[selected]}votes</h4>

        <h1>Anecdote with most votes</h1>
        <p>{anecdoteWithMaxVotes}</p>
      
      </div>
    </div>
  )
}

export default App
