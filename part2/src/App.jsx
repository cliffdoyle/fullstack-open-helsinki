
import Note from "./components/Note";

function App({prop}) {
 console.log(prop);
 

  return (
    <>
    <h1>Important Notes</h1>
    <ul>
     {prop.map((val,i)=>{
      console.log(i,val)
         return <Note note={val}/>
})}

    </ul>
    </>
  )
}

export default App
