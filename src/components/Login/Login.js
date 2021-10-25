import React from 'react'
import { Form, Button, Container, Row, Col, Alert, Card } from 'react-bootstrap'
import { useHistory } from 'react-router'
import loginIcon from '../../images/loginIcon.svg'
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { login } from '../../reducers/loginReducer'
import './Login.css'
import { useSelector } from 'react-redux'

const Login = () => {
  const notification = useSelector(state => state.notification)
  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogin = (credentials) => {
    dispatch(login(credentials))
    history.push('/home')
  }

  const schema = yup.object().shape({
    email: yup.string().email('Formato inválido de email').required('Es necesario ingresar un email válido.'),
    password: yup.string().required('Es necesario ingresar un password.'),
  })

  return (

    <Container className="mt-5">
      <Row className='justify-content-center align-items-center'>

        <Col lg={8} md={6} sm={12} className=' align-content-center'>
          <Card className="text-center mt-5 p-3 shadow ">
            <Card.Title className='text-red'>
              ¡Ingresá tus datos y mirá tus blogs!
            </Card.Title>
            <hr />
            <Card.Img className='loginIcon-img' alt="Login Icon" src={loginIcon}>

            </Card.Img>
            <Formik
              validationSchema={schema}
              onSubmit={handleLogin}
              initialValues={{
                email:'',
                password: ''
              }}
            >

              {({ handleSubmit, handleChange, values, touched, errors, isValid }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group controlId="validationFormik01" >
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      value={values.email}
                      placeholder="Ingresá tu email"
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid" >{errors.email}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      placeholder="Ingresá tu password"
                      onChange={handleChange}
                      isValid={touched.password && !errors.password}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                  <Button variant="dark btn-block" className='login-button' disabled={!isValid} type="submit">
                    Enviar
                  </Button>
                </Form>
              )}
            </Formik>
            { notification && <Alert variant="danger">{notification}</Alert>}
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Login