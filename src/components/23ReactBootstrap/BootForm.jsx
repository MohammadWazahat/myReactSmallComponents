import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

const BootForm = () => {
    
    const [values, setValues] = useState({
        email : "",
      });

    const handleChangeGender = (e) => {
        setValues({ ...values, email : e.target.value });
        console.log(values);
      };

      const submitForm = (e) => {
        e.preventDefault();
        console.log(values);
      };
  return (
    <div>
      <div>
      <Form onSubmit={submitForm}>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name ="email" onChange={handleChangeGender}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <button type="submit">submit</button>
    </Form>
      </div>
    </div>
  )
}

export default BootForm
