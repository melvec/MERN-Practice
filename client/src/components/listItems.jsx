import React, { useEffect, useState } from "react";
import { Form, Button, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getNamesAction } from "../actions/nameAction";

export const ListItems = () => {
  const { names } = useSelector((state) => state.name);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNamesAction());
  }, [dispatch]);

  return (
    <Stack gap={3}>
      {names.map((item) => (
        <p key={item._id}>{item.name}</p>
      ))}
    </Stack>
  );
};
