import React from 'react'
import { Card, Container, Form, Col, Row, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { editBlog } from '../../reducers/blogReducer'
import { Formik } from 'formik'
import * as yup from 'yup'
import { Redirect, useHistory } from 'react-router'

const BlogEdit = ({ blog }) => {

  const dispatch = useDispatch()
  const history = useHistory()

  if (!blog) {
    return <Redirect to='/home'/>
  }

  const editBlogHandler = content => {
    dispatch(editBlog(content, blog.id))
    history.push('/home')
  }

  const schema = yup.object().shape({
    userId: yup
      .number()
      .required('Es necesario ingresar un número')
      .integer('Sólo números enteros.')
      .min(1, 'Al menos un número')
      .max(20, 'No más de 20 números.'),
    title: yup
      .string()
      .required('Es necesario ingresar un título.')
      .min(2, 'Ingresá más de 2 caracteres.')
      .max(100, 'No más de 100 caracteres.'),
    body: yup
      .string()
      .required('Es necesario ingresar contenido.')
      .min(2, 'Ingresá más de 2 caracteres.')
      .max(500, 'No más de 500 caracteres.'),
  })

  return (
    <Container style={{ marginTop:100 }} >
      <Card className="mt-5 shadow"  border='dark'>
        <Card.Header as="h5">Editá tu blog.</Card.Header>
        <Card.Body>

          <Formik
            validationSchema={schema}
            onSubmit={editBlogHandler}
            initialValues={{
              userId: blog.userId,
              title: blog.title,
              body: blog.body
            }}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate className='p-3 font-weight-bold' onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="validationFormik01">
                  <Form.Label column sm="3">
              Usuario
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      name='userId'
                      type='number'
                      placeholder="Ingresá tu usuario"
                      value={values.userId}
                      onChange={handleChange}
                      isValid={touched.userId && !errors.userId}
                      isInvalid={!!errors.userId}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.userId}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="textTitle">
                  <Form.Label column sm="3">
                Título
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      type="text"
                      name='title'
                      placeholder="Ingresá el título de tu blog"
                      value={values.title}
                      onChange={handleChange}
                      isValid={touched.title && !errors.title}
                      isInvalid={!!errors.title}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.title}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="textContent">
                  <Form.Label column sm="3">
                Contenido
                  </Form.Label>
                  <Col sm="8">
                    <Form.Control
                      rows={3}
                      as="textarea"
                      type="text"
                      name='body'
                      placeholder="Ingresá el contenido de tu blog"
                      value={values.body}
                      onChange={handleChange}
                      isValid={touched.body && !errors.body}
                      isInvalid={!!errors.body}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.body}
                    </Form.Control.Feedback>
                  </Col>
                </Form.Group>
                <Button variant="dark" type="submit" size="lg" disabled={!isValid}>
              Guardar
                </Button>
              </Form>
            )}
          </Formik>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default BlogEdit
