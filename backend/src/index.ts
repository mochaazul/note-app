import createExpress, { Application, Request, Response } from "express";
import { json, urlencoded } from 'body-parser'
import Router from "./routes";

const express = createExpress();
const app: Application = express;
const port = process.env.PORT || 4000;

app.use(json())
app.use(urlencoded({ extended: true }))

app.use('/', Router)

app.listen(port, () => {
  console.log("Listening request on port : " + port)
})