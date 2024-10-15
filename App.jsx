import React, { useState } from "react"; 
import axios from 'axios';
function App(){
  const data={
    fname:"",lastName:""
  }
  const[inputData,setInputdata]=useState(data);
  const handleData=(e)=>{
    setInputdata({...inputData,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post(`https://jsonplaceholder.typicode.com/users`,inputData)
    .then((response)=>{
      console.log(response);
    })
  }
return(
  <div>
    <h1>Post Data Using Axios</h1>
    <input type="text" name="fname" value={inputData.fname} onChange={handleData}/><br /><br />
    <input type="text" name="lastName" value={inputData.lastName} onChange={handleData}/><br /><br />
    <button onClick={handleSubmit}>Submit</button>
  </div>
)
}
export default App;