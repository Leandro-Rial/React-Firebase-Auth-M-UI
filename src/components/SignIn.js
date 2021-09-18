import React, { useContext } from 'react';
import { Button, Box, TextField, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const SignIn = () => {

  const { firebaseSignIn } = useContext(AuthContext);

  const history = useHistory();

  const signInUser = async (credentials) => {

    try {
      
      const userAccount = await firebaseSignIn(credentials.email, credentials.password);

      if(userAccount) {
        history.push('/')
      } else {
        Swal.fire('error', 'The credentials are incorrects', 'error');
      }
      
      
    } catch (error) {
      Swal.fire('error', error.message, 'error');
    }
    

  };

  return (
    <div className="bg-home">
      <div className="wrapper">
        <div className="content">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be a valid email")
                .max(255)
                .required("Email is required"),
              password: Yup.string()
                .max(30)
                .required("Password is required")
                .min(5, "Password is too short - should be 5 chars minimum."),
            })}
            onSubmit={signInUser}
          >
            {({
              errors,
              isValid,
              touched,
              dirty,
              values,
              handleChange,
              handleSubmit,
            }) => (
              <>
                <Form onSubmit={handleSubmit}>
                  <Box sx={{ mb: 3 }}>
                    <Typography color="textPrimary" variant="h2">
                      Sign In
                    </Typography>
                  </Box>
                  <Field
                    name="email"
                    type="email"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    fullWidth
                    error={Boolean(errors.email) && Boolean(touched.email)}
                    helperText={Boolean(touched.email) && errors.email}
                  />
                  <Box height={14} />
                  <Field
                    name="password"
                    type="password"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Password"
                    value={values.password}
                    onChange={handleChange}
                    fullWidth
                    error={
                      Boolean(errors.password) && Boolean(touched.password)
                    }
                    helperText={Boolean(touched.password) && errors.password}
                  />
                  <Box height={16} />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    disabled={!dirty || !isValid}
                  >
                    Sign In
                  </Button>
                </Form>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="body1">
                    Do you haven't an account? create one{" "}
                    <Link to="signup">Sign Up</Link>
                  </Typography>
                </Box>
              </>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
