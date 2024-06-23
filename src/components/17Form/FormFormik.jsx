import React, { useEffect } from "react";
import { useFormik } from "formik";

const FormFormik = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    gender: "",
    city: "",
  };

  const Formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  // useEffect(()=>{
  // console.log(Formik.values)
  // },[])

  return (
    <div>
      <div>
        i am form formik
        <div>
          <form onSubmit={Formik.handleSubmit}>
            <label htmlFor="first_name">Enter First Name</label>
            <br />
            <input
              type="text"
              autoComplete="off"
              id="first_name"
              value={Formik.values.first_name}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              placeholder="Fisrt name"
              name="first_name"
            />
            <br />
            <label htmlFor="last_name">Enter Last Name</label>
            <br />
            <input
              type="text"
              autoComplete="off"
              id="last_name"
              value={Formik.values.last_name}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
              placeholder="Last name"
              name="last_name"
            />
            <br />
            <label htmlFor="gender">Enter gender</label>
            <br />
            <input
              type="text"
              placeholder="gender"
              name="gender"
              autoComplete="off"
              id="gender"
              value={Formik.values.gender}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <br />
            <label htmlFor="city">Enter city</label>
            <br />
            <input
              type="text"
              placeholder="city"
              name="city"
              autoComplete="off"
              id="city"
              value={Formik.values.city}
              onChange={Formik.handleChange}
              onBlur={Formik.handleBlur}
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormFormik;
