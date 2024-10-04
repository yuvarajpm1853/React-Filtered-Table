import { useState } from 'react'
import './App.css'
import { data } from './data.js'

function App() {
  const [search, setSearch] = useState("")
  return (
    <>
    <div className="container">
      <label htmlFor="filter">
      <h3>Filter Table Data</h3>
      </label>
      <input type="search" name="filter" id="filter" 
      placeholder='Enter to search' onChange={e=>setSearch(e.target.value)}/>
      <table className='table table-hover table-bordered'>
        <thead className='table-light'>
          <tr>
            <th>ID No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data.filter(item=>{
            return search === ""? item : 
            item.first_name.toLowerCase().includes(search.toLowerCase()) || item.last_name.toLowerCase().includes(search.toLowerCase()) ||
            item.email.toLowerCase().includes(search.toLowerCase()) || item.gender.toLowerCase().includes(search.toLowerCase()) ||
            item.phone_number.toLowerCase().includes(search.toLowerCase())
          })
          .map((item,index)=>(
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.first_name}</td>
              <td>{item.last_name}</td>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

export default App
