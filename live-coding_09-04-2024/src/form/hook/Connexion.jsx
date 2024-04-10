import { useFormik } from 'formik';
import { useNavigate } from "react-router";
import { useState } from 'react';

function useConnexion () {

  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  function redirectTo(route) {
    return nav(route);
  }

  const validate = values => {
    const errors = {};
  
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length < 5) {
      errors.password = 'Must be 6 characters or more';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: values => {
      setLoading(true);
      setTimeout(() => {
        if (values.email === "admin@toto.com" && values.password === "totoro") {
          redirectTo('/home');
        } else {
          alert('login et password incorrect');          
          setLoading(false);
        }
      },2000)

    },
  });

  return (
    <div>
      {loading && <p>loading</p>}
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />          
      {formik.errors.email ? <div>{formik.errors.email}</div> : null}

      <label htmlFor="password">password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password ? <div>{formik.errors.password}</div> : null}

      <button type="submit">Submit</button>
    </form>
    </div>
  );
}