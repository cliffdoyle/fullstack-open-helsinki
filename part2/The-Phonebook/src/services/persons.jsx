import axios from 'axios'

const baseUrl='http://localhost:3002/persons'

const getAll=()=>{
    const request=axios.get(baseUrl)
    return request.then(resp=>{
        return resp.data
    })
}


const create=(newObj)=>{
  const request=axios.post(baseUrl,newObj)
    return request.then(resp=>{
        return resp.data
    })
}

const deleted=(id)=>{
    return axios.delete(`${baseUrl}/${id}`).then(resp=>resp.data)

}

const update=(id,newObj)=>{
    const request=axios.put(`${baseUrl}/${id}`,newObj)
    return request.then(resp=>{
        return resp.data
    })
}

export default {getAll,create,deleted,update}