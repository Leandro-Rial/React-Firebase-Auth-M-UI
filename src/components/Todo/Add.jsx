import React, { useContext } from "react";
import { Button, Box, TextField, Typography } from "@material-ui/core";
import { Field, Form, Formik } from "formik";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";

const Add = () => {
  const { addTodo } = useContext(AuthContext);

  const history = useHistory();

  const addTodoCard = async (todocard) => {
    try {
      if (
        todocard.title === "" ||
        todocard.subtitle === "" ||
        todocard.body === ""
      ) {
        return Swal.fire("Error", "Please complete all the fields", "error");
      }

      await addTodo(todocard);

      history.push("/");
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          id: "",
          title: "",
          subtitle: "",
          body: "",
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().max(255).required("Title is required"),
          subtitle: Yup.string().max(255).required("Subtitle is required"),
          body: Yup.string().max(255).required("Body is required"),
        })}
        onSubmit={(todocard) => {
          addTodoCard(todocard);
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
                  Add Todo
                </Typography>
              </Box>
              <Field
                name="title"
                type="text"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Title"
                value={values.title}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.title) && Boolean(touched.title)}
                helperText={Boolean(touched.title) && errors.title}
              />
              <Box height={14} />
              <Field
                name="subtitle"
                type="text"
                as={TextField}
                variant="outlined"
                color="primary"
                label="SubTitle"
                value={values.subtitle}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.subtitle) && Boolean(touched.subtitle)}
                helperText={Boolean(touched.subtitle) && errors.subtitle}
              />
              <Box height={14} />
              <Field
                name="body"
                type="text"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Body"
                value={values.body}
                onChange={handleChange}
                fullWidth
                error={Boolean(errors.body) && Boolean(touched.body)}
                helperText={Boolean(touched.body) && errors.body}
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
                Create todo
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default Add;
