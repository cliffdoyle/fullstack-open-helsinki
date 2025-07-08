import { useState } from 'react'


function App() {
  const [persons, setPersons] = useState([
    {name:'Arto Hellas',id:1,number:+254703836264}
  ])
  const [newName, setNewName]=useState('')
  const [newNumber,setNewNumber]=useState()

  
  
  const handleSubmit=(event)=>{
    event.preventDefault()

    const newNamey={
      name:newName,
      id: persons.length+1,
      number:newNumber
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
    setNewNumber('')

  }
  const addName=(event)=>{

    setNewName(event.target.value)
  }

  const addNumber=(event)=>{
    setNewNumber(event.target.value)
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
          number:<input value={newNumber} onChange={addNumber}/>
        </div>

        <div>
          <button type='submit'>AddDetails</button>
        </div>
        </form>
        <h2>Numbers</h2>
        <ul>
        {persons.map((val)=>
        <div key={val.id}>
          <li>{val.name} {val.number}</li>

          </div>)}
        </ul>
     
    </div>
  )
}

export default App
