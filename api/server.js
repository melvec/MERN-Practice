import express from "express";
import { connectMongo } from "./config/dbConfig.js";
import { createName, readNames } from "./model/dataModel.js";
import userRouter from "./routers/userRouter.js";
import cors from "cors";

const app = express();
const PORT = 8000;
//const dataRouter =  express.Router()

app.use(express.json());

app.use(cors());

// dataRouter.post("/", (req, res)=>{
//     const data = req.body;

// })
connectMongo();

// Routers
app.use("/api/user", userRouter);

app.post("/api/data", (req, res) => {
  const data = req.body;
  createName(data)
    .then((mydata) => {
      res.json({ status: 200, data: mydata });
    })
    .catch((error) => {
      res.json({ status: error, data: error.message });
    });
});

app.get("/api/data", (req, res) => {
  readNames()
    .then((mydata) => {
      res.json({ status: 200, data: mydata });
    })
    .catch((error) => {
      res.json({ status: error, data: error.message });
    });
});

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log("server running");
});
