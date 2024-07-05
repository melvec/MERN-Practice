import React from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { createData } from "../axios/dataAxios";

export const MyForm = (props) => {
  const { formData, setFormData } = props;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    createData(formData);
  };

  return (
    <Stack gap={3}>
      <Form onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3  " controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="name"
            onChange={handleOnChange}
          />
          <Button className="m-3" variant="primary" type="submit">
            Add Item
          </Button>
        </Form.Group>
      </Form>
    </Stack>
  );
};
