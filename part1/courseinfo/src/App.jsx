
const Header=(props)=>{

  return (
    <>
    <p>
      {props.course}
    </p>
    </>
  )
}

const Part=(props)=>{

  return (
    <>
    <p>
      {props.part} {props.exercise}
    </p>
    </>
  )
}

const Content=(props)=>{
  console.log(props)

  return (
    <>
    <Part part={props.part1} exercise={props.exercises1}/>
    <Part part={props.part2} exercise={props.exercises2}/>
    <Part part={props.part3} exercise={props.exercises3}/>
    </>
  )
}

const Total=(props)=>{
  console.log(props)

  return (
    <>
   <p>Number of exercises {props.exercise}</p>
    </>
  )
}


const App=()=>{
  const course = 'Half Stack application development'

  const parts=[
    {
    name:'Fundamentals of React',
    exercises: 10
    },
    {
      name:'Using props to pass data',
      exercises:7

    },
    {
    name:'State of a component',
    exercises:14
    }
 

  ] 

  return (
    <>
    <Header course={course}/>
    <Content part1={parts[0].name} exercises1={parts[0].exercises}  part2={parts[1].name} exercises2={parts[1].exercises}  part3={parts[2].name} exercises3={parts[2].exercises}/>
    <Total exercise={parts[0].exercises+parts[1].exercises+parts[2].exercises}/>
    </>
  )
}

export default App
