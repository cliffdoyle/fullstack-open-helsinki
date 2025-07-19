import Note from './components/Note'
import { useState,useEffect } from 'react'
import axios from 'axios'
import noteService from './services/notes'
import notes from './services/notes'



// const Note = ({note,toggleImportanceof})=>{
//   const label = note.important ? 'make not important':'make important'

//   return (
//     <li>
//       {note.content}
//       <button onClick={toggleImportanceof}>{label}</button>
//     </li>
//   )

// }


function App() {
  // console.log('destructured notes:',notes)
    // console.log('destructured notes:',notes)
    const [notesie, setNotes]=useState([])
    const [newNote, setNewNote] = useState('a new note...')
    const [showAll, setShowAll] =useState(true)

    useEffect (()=>{
    console.log('effect')

    noteService.getAll()
    .then(response =>{
      console.log('promise fulfilled')
      setNotes(response.data)
    })
  },[])
  console.log('render:',notesie.length,'notes')

  const toggleImportanceof=(id)=>{
    console.log(`importance of ${id} needs to be toggled`)
    const note=notesie.find(n=>n.id==id)
    const changedNote={...note, important:!note.important}
    noteService.update(id,changedNote)

    .then(resp=>{
      setNotes(notesie.map(note=>note.id !==id?note : resp.data))
    })
    console.log('note importance',note)
  }


    const addNote=(e)=>{
      console.log('event:',e)
      e.preventDefault()
      console.log('button clicked',e.target)

      const noteObj={
        content: newNote,
        important: Math.random()<0.5,
        // id:String(notesie.length+1)
      }

     noteService
     .create(noteObj)
      .then(resp=>{
        console.log("hey",resp)
        setNotes(notesie.concat(resp.data))
        setNewNote('')
      })
      .catch(error=>{
          alert(
        `the note '${note.content}' was already deleted from server`
      )
      setNotes(notesie.filter(n=>n.id !=id))
      });
      
    
    }

    const handleNoteChange=(event)=>{
      setNewNote(event.target.value)
    }
    console.log('newnote',newNote)

    const notesToShow=showAll ? notesie : notesie.filter((note)=>note.important===true)

// console.log('important notes to display:',notesToShow);

  return (
    <>
    <h1>Notes</h1>
    <div>
     <button onClick={()=>setShowAll(!showAll)}>
      show {showAll ? 'important':'all'}

     </button>
    </div>
    {notesToShow.map((val)=>
    <ul key={val.id}>
    <Note note={val} toggleImportance={()=>toggleImportanceof(val.id)}/>
    </ul>
    )}

    <h1>Enter Notes on Form</h1>
    <form onSubmit={addNote}>
      <input value={newNote} onChange={handleNoteChange}/>
      <button type='submit'>save</button>
    </form>

    </>
  )
}

export default App
