import { Formik, Field, Form, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        try{
          await axios.post('http://localhost:4000/auth', values);
        }catch(err){
          toast.error("User already exists!", {
            position: toast.POSITION.TOP_LEFT
          });
          console.log(response.data);
        }
        // Обробка відповіді
     
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
     <ToastContainer />
  </div>
  );
}

export default MyForm;
