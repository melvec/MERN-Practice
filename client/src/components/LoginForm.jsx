import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { loginUser } from "../axios/userAxios";
import useForm from "../hooks/useForm";
import CustomInput from "./CustomInput";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const navigate = useNavigate();
  const { email, password } = formData;
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const result = await loginUser(formData);
    if (result.status === "error") {
      return toast.error(result.message);
    } else {
      if (result.status === 200) {
        navigate("/home");
      }
    }
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
