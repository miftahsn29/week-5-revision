import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const port = 3001;

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

app.get("/", async (req, res) => {
  const response = await fetch("http://localhost:3000/cek");
  const body = await response.text();

  console.log(body);
  res.json("website b");
});

app.get("/trigger-webhook-event-1", async (req, res) => {
    //do something trigger website a
    const data = {
      secret :'secret123',
      event :'event-1'
    }
    //menggunakan fetch
    const response = await fetch('http://localhost:3000/github-event',{
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
    console.log('response',response)
    //return succes
    res.json('event success');
  })
app.get("/trigger-webhook-event-2", async (req, res) => {
    //do something trigger website a
    const data = {
      secret :'secret123',
      event:'event-2'
    }
    //menggunakan fetch
    const response = await fetch('http://localhost:3000/github-event',{
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
    console.log('response',response)
    //return succes
    res.json('event success');
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});