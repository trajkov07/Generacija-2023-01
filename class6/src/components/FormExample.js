import { useState, useEffect } from "react";

export const FormExample = () => {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  //   const handleUsernameChange = (event) => {
  //     const { value } = event.target;
  //     setFormValues({ ...formValues, username: value });
  //     console.log(formValues);
  //   };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name);
    // [name] will be translated to username: value for the username input
    // and email: value for the email input
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const handleSubmit = (e) => {
    console.log("Form is submitted");
    e.preventDefault();
    console.log(formValues);
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  // username must contain at least 1 character
  // email is required and must be an email
  // password is required and password must be between 5 character and 10
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be more than 5 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must be less than 10 characters";
    }

    return errors;
  };

  return (
    <div className="container">
      {
        // && ternaren operator, ako e true kje se pokaze vtoriot del
        isSubmit && Object.keys(formErrors).length === 0 && (
          <div>Registration was a success!</div>
        )
      }

      <form onSubmit={handleSubmit}>
        <h3>Registration form</h3>
        <div className="form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
};

// Neka imame forma vo koja kje imame ime, prezime i telefonski broj
// neka pri submit se proveruvaat slednive validacii
// imeto mora da bide najmalku 3 karakteri a najmnogu 20
// prezimeto mora da bide najmalku 5 karakteri a najmnogu 20
// telefonskiot, zadolzitelno e da bide samo brojki i da ima tocno 9 brojki

// dokolku nekoi od ovie validacii ne e zadovolena da prikazeme soodveten error
// dokolku se zadovoleni site validaciii da ja skrieme formata i da
// prikazeme nekoj tekst vo nekoj h1 element Form was submitted
