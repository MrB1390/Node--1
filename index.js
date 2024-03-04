import express from "express";
import fs from 'fs';
import {format} from 'date-fns'

const app = express();
const PORT = 4000;

const today = format(new Date(), 'dd-MM-yyyy-HH-mm-ss');
const filePath = `TimeStamp/${today}.txt`;
const content = `Current Date and Time: ${today}`;

app.get('/write', (req, res) => {
  try {
    fs.writeFileSync(filePath, content, "utf8");
    res.status(200).send("File written Successfully");
  } catch (error) {
    res.status(500).send("Error writing File" + error.message);
  }
});

app.get('/read', (req, res) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    res.status(200).send(`${data}`);
  } catch (error) {
    res.status(500).send("Error reading File" + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
