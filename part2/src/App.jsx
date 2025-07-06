
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

const Total=({exercises})=>{
  console.log('Total props',exercises)

  const total=exercises.reduce((sum,val)=>{ return sum+=val.exercises},0)

  return (
    <div>
      <p>Total exercises: {total}</p>
    </div>
  )
  
}

const Course = ({course})=>{
  console.log(course)


  return(
    <div>
      <Header name={course.name}/>
      <Content parts={course.parts}/>
      <Total exercises={course.parts}/>

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
    },
    {
      name: 'Redux',
      exercises:11,
      id:4
    }
    
  ] 
}

  return <Course course={course}/>
    
}

export default App
