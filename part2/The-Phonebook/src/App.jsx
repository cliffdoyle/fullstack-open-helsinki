import { useEffect, useState } from 'react'
import services from './services/persons'

const SearchFilter=({filterz,person,delety})=>{
  // console.log('filtered names:',filterz)
  //  console.log('unfiltered names:',person)

  if(filterz && filterz.length>0){
return (
      <div>
        <h2>Numbers</h2>
          <ul>
            {filterz.map(val=>
            <li key={val.id}>
              {val.name} {val.number}
              <button onClick={()=>delety(val.id)}>remove</button>

              </li>
            )}
            </ul>
            </div>
    )
  }
  return (
    <div>
        <AllPeople person={person} del={delety}/>
    </div>
  )

}

const Form=({submit,namey,numpy,namzy,numbi})=>{

  return (
    <div>
        <form  onSubmit={submit}>
        <div>
          name: <input value={namzy} onChange={namey}/>
        </div>
        <div>
          number:<input value={numbi} onChange={numpy}/>
        </div>

        <div>
          <button type='submit'>AddDetails</button>
        </div>
        </form>
    </div>
  )

}

const AllPeople=({person,del})=>{

  return (
    <div> 
        {person.map((val)=>
        <ul key={val.id}>
          <DisplaySinglePerson  name={val.name} num={val.number} id={val.id}/>
          <button onClick={()=>del(val.id)}>remove</button>
          </ul>
        )}

    </div>
  )

}

const DisplaySinglePerson=({id,name, num})=>{
  
  return (
    <div>
      <li>
        {name} {num}
        </li>

    </div>
  )

}





function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName]=useState('')
  const [newNumber,setNewNumber]=useState('')
  const [filteredName, setFilteredName]=useState('')


  useEffect(()=>{
    // axios
    // .get('http://localhost:3002/persons')
    // .then(resp=>{
    //   const notes=resp.data
    //   setPersons(notes)
    // })
    services
    .getAll()
    .then(data=>{
      setPersons(data)
    })
    
  },[])

 
   const deleteButton=(id)=>{
      console.log(`person with this ${id} will be deleted`)
      const personToDelete=persons.find(n=>n.id==id)
      // const deletedperson={...persons}
      if(window.confirm(`Delete ${personToDelete.name}`)){
        services.deleted(id)
        .then(()=>setPersons(persons.filter(p=>p.id !==id)))

      }
  
      // .then(resp=>{
      //   setNotes(notesie.map(note=>note.id !==id?note : resp.data))
      // })
      // console.log('note importance',note)
    }
 
  
  
  const handleSubmit=(event)=>{
    event.preventDefault()

    const newNamey={
      name:newName,
      // id: persons.length+1,
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
    // axios
    // .post('http://localhost:3002/persons',newNamey)
    // .then(resp=>{
    //   console.log('data response from post:',resp)
    //   setPersons(persons.concat(resp.data))
    // })
    services
    .create(newNamey)
    .then(resp=>{
      setPersons(persons.concat(resp))
      
           setNewName('')
           setNewNumber('')
    })

  }
  const addName=(event)=>{

    setNewName(event.target.value)
  }

  const addNumber=(event)=>{
    setNewNumber(event.target.value)
  }

  const addFilteredName=(event)=>{
    setFilteredName(event.target.value)
  }


  const filterResult=filteredName ? persons.filter(val=>val.name.toLowerCase().includes(filteredName.toLocaleLowerCase())):[]
  // console.log('filtered names:',filteredName)
  

  return (
    <div>
      <h2>Phonebook</h2>
        Search: <input type="text" value={filteredName} onChange={addFilteredName}/>
          <h2>Add New</h2>
          <Form submit={handleSubmit} namey={addName} numpy={addNumber} namzy={newName} numbi={newNumber}/>
           <h2>Numbers</h2>
          <SearchFilter filterz={filterResult} person={persons}  delety={deleteButton}/>
    </div>
  )
}

export default App
