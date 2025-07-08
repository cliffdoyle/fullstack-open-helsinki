
const Header=(props)=>{
  console.log('Header',props)

  return (
    <>
    <p>
      {props.course}
    </p>
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

const Content=(props)=>{
  console.log('content props:',props)
  console.log('content:',props.part[0].name)

  return (
    <>
   <p>{props.part[0].name} {props.part[0].exercises}</p>
 <p>{props.part[1].name} {props.part[1].exercises}</p>
 <p>{props.part[2].name} {props.part[2].exercises}</p>
    </>
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


const App=()=>{
  const course = {
    name:'Half Stack application development',
    parts: [
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

  }
 

  return (
    <>
    <Header course={course.name}/>
    <Content part={course.parts}/>
    <Total exercise={course.parts}/>
    </>
  )
}

export default App
