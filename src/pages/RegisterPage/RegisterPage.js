import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import Container from '../../../node_modules/react-bootstrap/Container';
import Form from '../../../node_modules/react-bootstrap/Form';
import Button  from '../../../node_modules/react-bootstrap/Button';
import './RegisterPage.css';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container id="main-container" className="d-grid h-100">
      <Form 
        onSubmit={handleSubmit} 
        autoComplete="off"
        id="sign-in-form" 
        className="text-center p-3 w-100"
      >
        <h1 className="mb-3 fs-3 fw-normal">Sign up for Phonebook</h1>

        <Form.Group controlId="sign-in-email-user-name">
          <Form.Control
            type="text" 
            name="name" 
            value={name}
            onChange={handleChange}
            size="lg" 
            placeholder="User Name" 
            autoComplete="username" 
            className="position-relative" 
          />
      </Form.Group>

        <Form.Group controlId="sign-in-email-address">
          <Form.Control
            name="email" 
            value={email}
            onChange={handleChange}
            type="email" 
            size="lg" 
            placeholder="Email address" 
            autoComplete="username" 
            className="position-relative" 
          />
      </Form.Group>

        <Form.Group className="mb-3" controlId="sign-in-password">
          <Form.Control 
            type="password" 
            name="password"
            value={password}
            onChange={handleChange}
            minLength = "8"
            size="lg" 
            placeholder="Password" 
            autoComplete="current-password" 
            className="position-relative" 
          />
        </Form.Group>

        <div className="d-grid">
          <Button variant="primary" size="lg" type="submit">Register</Button>
        </div>
      </Form>
    </Container>
  );
}