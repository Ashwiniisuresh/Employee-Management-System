import React , { useEffect , useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee  from './Employee'
import { useNavigate } from 'react-router-dom';




function Edit() {
  const [id,setId] = useState('')
  const [uname,setUname] = useState('')
  const [age,setAge] = useState('')
  const [desg,setDesg] = useState('')
  const [salary,setSalary] = useState(0)

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setUname(localStorage.getItem('uname'))
    setAge(localStorage.getItem('age'))
    setDesg(localStorage.getItem('desg'))
    setSalary(JSON.parse(localStorage.getItem('salary')))

  }, [])

var index = Employee.map(item=>item.id).indexOf(id)
let history = useNavigate()
console.log(id);


const handleUpdate =(e)=>{
  e.preventDefault()
  let emp = Employee[index]
  emp.uname = uname
  emp.age = age
  emp.desg = desg
  emp.salary = salary
  history('/')

}

  return (
    <div>  <h1 className='text-primary mt-2  ms-3 text-center'>Employee Management Sysytem
    &nbsp;
    
    </h1>
    <p className='ms-3 me-3'>An employee is someone who gets paid to work for a person or company. Workers don't need to work full time to be considered employees—they simply need to be paid to work by an employer (the person or business that pays them).</p>
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



    
     
      <Button onClick={(e)=>handleUpdate(e)} variant="primary" type="submit">
        Update
      </Button>
    </Form>
      </Col>
    </Row>
    </div>
  )
}

export default Edit