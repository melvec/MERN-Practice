import React, { useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";

export const ListItems = (props) => {
  const { myData } = props;

  return (
    <Stack gap={3}>
      {myData.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))}
    </Stack>
  );
};
