import { useState } from "react";
import Note from './components/Note'

const App = ({ notes }) => {
  const [notey,setNotes]=useState(notes)
  const [newNote, setNewNote]=useState('a new note...')

  const addNotes = (event)=>{
    event.preventDefault()
    console.log('button clicked',event.target)
  }

  const handleNoteChange = (event)=>{
    console.log(event.target.value)
    setNewNote(event.target.value)
  }
  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notey.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNotes}>
        <input type="text" value={newNote} onChange={handleNoteChange}/>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default App