import { useState } from "react";
import "./Register.css";
import FormInput from "./FormInput";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const [submittedValues, setSubmittedValues] = useState(null);
  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage: "Username must be 3-16 characters and should not include any special characters!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address",
      label: "Email",
      required: true
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character",
      label: "Password",
      pattern: "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,20}$",
      required: true
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
      required: true
    }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValues(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  
  return (
    <div className="Register">
      <form onSubmit={handleSubmit} className={`formInput ${submittedValues ? 'submitted-values' : ''}`}>
      <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        {submittedValues && (
          <div>
            <h2>Submitted Details:</h2>
            <p>Username: {submittedValues.username}</p>
            <p>Email: {submittedValues.email}</p>
            <p>Birthday: {submittedValues.birthday}</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Register;