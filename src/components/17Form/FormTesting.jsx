import React, { useState } from "react";

const FormTesting = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    city: "",
  });

  const handleChangeFirstName = (e) => {
    console.log(e.target.value);
    setValues({ ...values, first_name: e.target.value });
    console.log(values);
  };
  const handleChangeLastName = (e) => {
    setValues({ ...values, last_name: e.target.value });
    console.log(values);
  };
  const handleChangeGender = (e) => {
    setValues({ ...values, gender: e.target.value });
    console.log(values);
  };
  const handleChangeCity = (e) => {
    setValues({ ...values, city: e.target.value });
    console.log(values);
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(values);
  };
  return (
    <div>
      i am form
      <div>
        <form onSubmit={submitForm}>
          <label htmlFor="first_name">Enter First Name</label>
          <br />
          <input
            type="text"
            placeholder="Fisrt name"
            name="first_name"
            onChange={handleChangeFirstName}
          
          />
          <br />
          <label htmlFor="last_name">Enter Last Name</label>
          <br />
          <input
            type="text"
            placeholder="Last name"
            name="last_name"
            onChange={handleChangeLastName}
            //   onChange={(e) => setValues({ ...values, last_name: e.target.value })}
          />
          <br />
          <label htmlFor="gender">Enter gender</label>
          <br />
          <input
            type="text"
            placeholder="gender"
            name="gender"
            onChange={handleChangeGender}
            //   onChange={(e) => setValues({ ...values, gender: e.target.value })}
          />
          <br />
          <label htmlFor="city">Enter city</label>
          <br />
          <input
            type="text"
            placeholder="city"
            name="city"
            onChange={handleChangeCity}
            //   onChange={(e) => setValues({ ...values, city: e.target.value })}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormTesting;
