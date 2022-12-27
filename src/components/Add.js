import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import uuid from 'react-uuid';
import Employee  from './Employee'
import { useNavigate } from 'react-router-dom';





function Add() {
  const [uname,setUname] = useState('')
  const [age,setAge] = useState('')
  const [desg,setDesg] = useState('')
  const [salary,setSalary] = useState(0)

  let history = useNavigate()

  const handleEmployee = (e)=>{
    e.preventDefault()
    let ids = uuid()
    console.log(ids);
    let uniqueId = ids.slice(0,8)
    console.log(uniqueId);
    Employee.push({
      id:uniqueId,
      uname:uname,
      age:age,
      desg:desg,
      salary:salary
    })
    history('/')
  }
  return (
    <div>  <h1 className='text-primary mt-2  ms-3 text-center'>Employee Management Sysytem
    &nbsp;
    
    </h1>
    <p className='mt-3 mt-3'>
        hai my name is ashwini.I completed my graduation on 2022.

    </p>
    <Row>
      <Col md={4}>
        <img style={{width:'400px'}} src='http://cdn.onlinewebfonts.com/svg/img_222195.png'></img>

      </Col>
      <Col md={8}>
      <Form className='border p-2'>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control style={{color:'red'}} value={uname} type="text" required
         onChange={(e)=>setUname(e.target.value)}
        />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control style={{color:"red"}} value={age} type="text" required
                 onChange={(e)=>setAge(e.target.value)}
                />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>designation</Form.Label>
        <Form.Control style={{color:"red"}} value={desg} type="text"required
                 onChange={(e)=>setDesg(e.target.value)}
                />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Salary</Form.Label>
        <Form.Control style={{color:"red"}} value={salary} type="text" required
                 onChange={(e)=>setSalary(e.target.value)}
                />
        
      </Form.Group>



    
     
      <Button onClick={(e)=>handleEmployee(e)} variant="primary" type="submit"> 
        ADD 
      </Button> 
    </Form>
      </Col>
    </Row>
    </div>
  )
}

export default Add