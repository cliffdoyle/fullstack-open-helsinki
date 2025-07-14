import axios from 'axios'

import ReactDom from 'react-dom/client'

import App from './App'

// const promise = axios.get('http://localhost:3001/notes')

// promise.then(resolve=>{
//   console.log(resolve.data)
// })

// console.log(promise)

// const promise2 =axios.get('foo-bar')
// console.log(promise2)

// axios
// .get('http://localhost:3001/notes')
// .then(resp=>{
//   console.log(resp.data)
//   const notes=resp.data
  ReactDom.createRoot(document.getElementById('root')).render(<App/>)
// })