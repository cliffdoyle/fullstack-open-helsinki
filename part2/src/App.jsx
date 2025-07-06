
const Header=({name})=>{

  return (
    <>
    <h1>
      {name}
    </h1>
    </>
  )
}

// const Part=(props)=>{

//   return (
//     <>
//     <p>
//       {props.part} {props.exercise}
//     </p>
//     </>
//   )
// }

const Content=({parts})=>{
  console.log('content props:',parts)
  console.log('content:',parts[0].name)

  return (
    <div>
      {parts.map((part)=>
     
      <p key={part.id}>
        {part.name} {part.exercises}
        </p>
     

      )}
    </div>
  )
}

const Total=(props)=>{
  console.log('Total props',props.exercise[0])
  // const [a,b,c]=[props.exercise]
  const sum=props.exercise[0].exercises+props.exercise[1].exercises+props.exercise[2].exercises
  console.log('sum',sum)

  return (
    <>
   <p>Number of exercises {sum}</p>
    </>
  )
}

const Course = ({course})=>{
  console.log(course)


  return(
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>

    </div>
  )
}


const App=()=>{
  const course = {
    id:1,
    name:'Half Stack application development',

   parts: [
    {
    name:'Fundamentals of React',
    exercises: 10,
    id:1
    },
    {
      name:'Using props to pass data',
      exercises:7,
      id:2

    },
    {
    name:'State of a component',
    exercises:14,
    id:3
    }
    
  ] 
}

  return <Course course={course}/>
    
}

export default App
