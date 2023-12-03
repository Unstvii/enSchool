import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

function MyForm() {
  const validationSchema = Yup.object().shape({
    nickName: Yup.string()
      .required('NickName is required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });
  return (
    <div>
    <h1>My Form</h1>
    <Formik
      initialValues={{
        nickName:'',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        // Здесь вы можете використовувати значення форми
        console.log(values);

        // Надсилання даних на бекенд
        const response = await axios.post('http://localhost:4000/auth', values);

        // Обробка відповіді
        console.log(response.data);
      }}
    >
      <Form>
        <label htmlFor="nickName">nickName</label>
        <Field name="nickName" type="text" />
        <ErrorMessage name="nickName" component="div" />

        <label htmlFor="email">Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" component="div" />

        <label htmlFor="password">Password</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" component="div" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  </div>
  );
}

export default MyForm;
