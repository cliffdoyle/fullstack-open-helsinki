
const Header=({name})=>{

  return (
    <>
    <h1>
    {name}
    </h1>
    </>
  )
}


const Content=({parts})=>{
  console.log('content props:',parts)

  return (
    <div>
      {parts.map((part,i)=>(
        <div key={i}>
        <Header name={part.name}/>
       
        {part.parts.map((val,j)=>(
          <p key={j}>
          {val.name} {val.exercises}
          
          </p>
      ))} 
      <Total exercises={part.parts}/>
    
    </div>
      
      ))}
    </div>
  )
}

const Total=({exercises})=>{
  console.log('Total props',exercises)

  const total=exercises.reduce((sum,val)=>{ return sum+=val.exercises},0)

  return (
    <div>
      <h3>Total exercises: {total}</h3>
    </div>
  )
  
}

const Course = ({course})=>{
  console.log(course)


  return(
    <div>
      <Content parts={course}/>
      
    </div>
  )
}


const App=()=>{
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={courses}/>
    
}

export default App
