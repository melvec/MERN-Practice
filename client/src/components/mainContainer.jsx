import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ListItems } from "./listItems";
import { MyForm } from "./myForm";
import { useEffect } from "react";
import { listData } from "../axios/dataAxios";

export const MainContainer = () => {
  const [formData, setFormData] = useState([]);
  const [myData, setMyData] = useState([]);

  const fetchNames = async () => {
    const result = await listData();
    console.log(result.data);
    setMyData(result.data);
  };
  useEffect(() => {
    fetchNames();
  }, []);

  return (
    <div>
      <Container className="p-4">
        <MyForm formData={formData} setFormData={setFormData} />
        <ListItems myData={myData} />
      </Container>
    </div>
  );
};
