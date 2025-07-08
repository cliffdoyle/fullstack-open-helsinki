import { useState } from 'react'


function App() {
  const [persons, setPersons] = useState([
    {name:'Arto Hellas',id:1}
  ])
  const [newName, setNewName]=useState('')

  
  
  const handleSubmit=(event)=>{
    event.preventDefault()

    const newNamey={
      name:newName,
      id: persons.length+1
    }
    // for (let i=0;i<persons.length;i++){
    //   // if (persons[i].name==newNamey.name){
    //   //   alert(`${newNamey.name}is already added to phonebook`)
    //   //   return
    //   // }
    // }
    // const result=persons.filter(val=>
    //   val.name !=newNamey.name
    // )
    const nameExist=persons.some(val=>val.name===newNamey.name)
    if (nameExist){
      alert(`${newNamey.name} is already added to phonebook`)
      return
    }
    setPersons(persons.concat(newNamey))
    setNewName('')
  }
  const addName=(event)=>{

    setNewName(event.target.value)
  }

  console.log('new name:',newName)
  console.log('persons array:',persons)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={addName}/>
        </div>

        <div>
          <button type='submit'>add</button>
        </div>
        </form>
        <h2>Numbers</h2>
        <ul>
        {persons.map((val)=><div key={val.id}><li>{val.name}</li></div>)}
        </ul>
     
    </div>
  )
}

export default App
