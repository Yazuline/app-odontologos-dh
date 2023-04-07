import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import styles from "./contac.module.css"


const validationSchema = yup.object({
  email: yup
    .string('correo')
    .email('Debe escribir un email')
    .required('Email requerido'),
  name: yup
    .string('Escriba nombre completo')
    .min(6, 'Nombre debe tener al menos 6 caracteres')
    .required('Nombre requerdio'),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
     
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.containerCards}>

      <form onSubmit={formik.handleSubmit}>
        
      <TextField
          fullWidth
          id="name"
          name="name"
          type="text"
          label="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
         <hr></hr>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
         <hr></hr>
        <Button color="primary" variant="contained" fullWidth type="submit">
         ENVIAR
        </Button>
      </form>
    </div>
  );
};


export default Contact