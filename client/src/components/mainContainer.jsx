import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ListItems } from "./listItems";
import { MyForm } from "./myForm";
import { useEffect } from "react";
import { listData } from "../axios/dataAxios";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  const [formData, setFormData] = useState([]);

  return (
    <div>
      <Container className="p-4">
        <MyForm formData={formData} setFormData={setFormData} />
        <ListItems />
      </Container>
    </div>
  );
};
