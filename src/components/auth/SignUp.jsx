import React, { useContext } from "react";
import { Button, Box, TextField, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";


const SignUp = () => {

  const { firebaseSignUp } = useContext(AuthContext);

  const history = useHistory();
  
  const signUpUser = async (user) => {
    
    try {
      
      await firebaseSignUp(user.email, user.password);
  
      Swal.fire('success', 'User created successfully', 'success');
  
      history.push('/')
      
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
            onSubmit={(user) => {
              signUpUser(user)
            }}
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
                <Form onSubmit={handleSubmit} className="animate__animated animate__fadeIn">
                  <Box sx={{ mb: 3 }}>
                    <Typography color="textPrimary" variant="h2">
                      Sign Up
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
                    Sign Up
                  </Button>
                </Form>
                <Box sx={{ mb: 3 }}>
                  <Typography color="textPrimary" variant="body1">
                    If you have an account <Link to="signin">Sign In</Link>
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

export default SignUp;
