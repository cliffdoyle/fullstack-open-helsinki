import {useState,useEffect} from 'react'
import axios from 'axios'
import Note from './components/Note'


const App=()=>{
  const[notes,setNotes]=useState([])
  const[newNote,setNewNote]=useState('')
  const[showAll,setShowAll]=useState(true)


  useEffect(()=>{
    console.log('effect')
    axios
    .get('http://localhost:3001/notes')
    .then(resp=>{
      console.log('promise fulfilled')
      const noteFromServer=resp.data
      setNotes(noteFromServer)
    })
  },[])
}

