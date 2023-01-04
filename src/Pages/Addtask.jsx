import React from 'react'
import  {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import { Form, Button, Col, Container } from 'react-bootstrap';
function Addtask(props) {
  
    const [credentials, setCredentials] = useState({
        Name: undefined,
    Priority: undefined,
    Status:undefined,
        Enddate:undefined
          });
       
          const navigate =useNavigate()
    
        
          const handleChange = (e) => {
            setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          };
       
          const handleClick = async (e) => {
            e.preventDefault();
            
          const res = await axios.post(`http://localhost:5000/task/`, credentials);
          console.log(res)
        navigate(`/`)
    }
  return (
    <div>
    <div style={{width:"100%"}} className='container'>

<Form style={{width:"100%"}}>
<Row className="mb-3">
<Form.Group as={Col} className="mb-2 lInput" controlId="formBasicPassword" id='person' onChange={handleChange}>
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" id="Name" placeholder="" />
      </Form.Group>
      <Form.Group as={Col} className="mb-2 lInput" controlId="formBasicPassword" id='designation' onChange={handleChange}>
        <Form.Label>End Date</Form.Label>
        <Form.Control type="Date" placeholder="" id="Enddate" />
      </Form.Group>
      </Row>
      <Form.Group controlId="formBasicSelect">
        <Form.Label>Priority</Form.Label>
        <Form.Control
          as="select" 
          id="Priority"
          type="Number"
          onChange={handleChange}
         >
            <option value="Started">None</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
         
        
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicSelect" style={{marginTop:20}}>
        <Form.Label>Status</Form.Label>
        <Form.Control
          as="select" 
          id="Status"
          type="text"
          onChange={handleChange}
         >
            <option value="Started">None</option>
          <option value="Started">Started</option>
          <option value="Completed">Completed</option>
        
        </Form.Control>
      </Form.Group>
      <Button variant="primary"  type="submit" onClick ={handleClick} className="button">
        Save
      </Button>
</Form>
        
    </div>
   
   
  </div>
  )
}

export default Addtask