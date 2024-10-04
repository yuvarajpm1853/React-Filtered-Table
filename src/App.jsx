import { useState } from 'react'
import './App.css'
import { data } from './data.js'

function App() {
  // console.log(data);
  return (
    <>
    <div className="container">
      <label htmlFor="filter">
      <h3>Filter Table Data</h3>
      </label>
      <input type="search" name="filter" id="filter" />
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item,index)=>(
            <tr key={index}>
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
