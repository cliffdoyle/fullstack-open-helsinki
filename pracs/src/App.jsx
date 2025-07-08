import Note from './components/Note'
import { useState } from 'react'


function App({notes}) {
  console.log('destructured notes:',notes)
    // console.log('destructured notes:',notes)
    const [notesie, setNotes]=useState(notes)
    const [newNote, setNewNote] = useState('a new note...')
    const [showAll, setShowAll] =useState(true)

    const addNote=(e)=>{
      console.log('event:',e)
      e.preventDefault()
      console.log('button clicked',e.target)

      const noteObj={
        content: newNote,
        important: Math.random()<0.5,
        id:String(notesie.length+1)
      }
      setNotes(notesie.concat(noteObj))
      setNewNote('')
    
    }

    const handleNoteChange=(event)=>{
      setNewNote(event.target.value)
    }
    console.log('newnote',newNote)

    const notesToShow=showAll ? notesie : notesie.filter((note)=>note.important===true)

console.log('important notes to display:',notesToShow);

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
    <Note note={val}/>
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
