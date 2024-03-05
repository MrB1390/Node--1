import express from "express";
import fs from 'fs';
import { format } from 'date-fns';

const app = express();
const PORT = 4000;

app.get('/',(req,res)=>{
     res.status(200).send(`<div style="text-align: center">
     <p> For create text file use  /write </p>
     <p> For read text file use  /read </p>
     </div>`)
})

app.get('/write', (req,res)=>{
    const today = format(new Date(), 'dd-MM-yyyy-HH-mm');
    const timeVal = format(new Date(), 'dd-MM-yyyy-HH-mm-ss');
    const filePath = `TimeStamp/${today}.txt`
    fs.writeFileSync(filePath, `Current Date and Time ${timeVal}` , 'utf8')
    res.status(200).send("File written successfully")
})

app.get('/read',(req,res) => {
  const today = format(new Date(), 'dd-MM-yyyy-HH-mm');
  const filePath = `TimeStamp/${today}.txt`
  let data = fs.readFileSync(filePath, 'utf-8')
  res.status(200).send(data)
})


app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
