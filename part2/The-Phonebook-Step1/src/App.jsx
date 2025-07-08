import { useState } from 'react'


function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName]=useState('')
  const [newNumber,setNewNumber]=useState()
  const [filteredName, setFilteredName]=useState('')

  
  
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

  const addFilteredName=(event)=>{
    setFilteredName('')
    setFilteredName(event.target.value)
  }

  // console.log('new name:',newName)
  // console.log('persons array:',persons)


  const filterResult=filteredName ? persons.filter(val=>val.name.toLowerCase().includes(filteredName.toLocaleLowerCase())):[]
  console.log('filtered names:',filteredName)
  

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Show Filtered Results: <input type="text" value={filteredName} onChange={addFilteredName}/>
      </div>
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
        <h2>Filtered Search Result</h2>
        <ul>
          {filterResult.map(val=>
          <li key={val.id}>{val.name} {val.number}</li>
          

          )}
          </ul>
          <ul>
              <h2>Un-filtered Search Result</h2>
        {persons.map((val)=>
        <div key={val.id}>
          <li>{val.name} {val.number}</li>

          </div>)}
        </ul>
     
    </div>
  )
}

export default App
