import React from "react";
import { Button, Form } from "react-bootstrap";
import { loginUser } from "../axios/userAxios";
import useForm from "../hooks/useForm";
import CustomInput from "./CustomInput";

const initialFormData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const result = await loginUser();
  };

  return (
    <Form onSubmit={handleOnSubmit}>
      <CustomInput
        label="Email"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "email",
          name: "email",
          value: email,
          placeholder: "Enter your Email",
          required: true,
        }}
      />

      <CustomInput
        label="Password"
        handleOnChange={handleOnChange}
        inputAttributes={{
          type: "password",
          name: "password",
          value: password,
          placeholder: "Enter a Password",
          required: true,
        }}
      />

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
