// import { useEffect } from 'react';
import { Formik } from 'formik';
import { Form, Container, Button, Col } from 'react-bootstrap';
// import { useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';

const LoginForm = ({ isLogin, setisLogin }) => {
  // const history = useHistory();
  // const location = useLocation();
  // const from = location.state.from.pathname || { from: { pathname: '/' } };

  // const LogIn = () => {
  //   // cambiar luego por la respuesta de la api
  //   localStorage.setItem('TOKEN', 123456);
  //   history.replace(from);
  // };

  return (
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Email inválido').required('Required'),
          password: Yup.string()
            .required('Favor ingresa tu contraseña')
            .min(6, 'La contraseña debería tener mínimo 6 caracteres.')
            .matches(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/g,
              'La contraseña debe tener números y caracteres especiales.',
            ),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          localStorage.setItem('TOKEN', 123456);
          history.push('/');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form
            className="rounded p-4 p-sm-3"
            noValidate
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="validationFormik01" className="mb-4">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.email}
                isValid={values.email && !errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="validationFormik01" className="mb-4">
              <Form.Control
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                isInvalid={!!errors.password}
                isValid={values.password && !errors.password}
              />
              <Form.Control.Feedback type="invalid">
                {errors.password || touched.password}
              </Form.Control.Feedback>
            </Form.Group>
            <Col className='d-flex justify-content-between'>
              <button onClick={() => setisLogin(!isLogin)} className='text-primary mr-2 bg-white border-0'><strong>
                No tengo cuenta
              </strong>
              </button>
              <Button variant="primary" type="submit" disabled={isSubmitting} className='text-white' >
                Ingresar
              </Button>
            </Col>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginForm;
