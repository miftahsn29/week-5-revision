const express = require("express");
const app = express();

var bodyParser = require("body-parser");
var cors = require("cors");

var jsonParser = bodyParser.json();

var urlencodeParser = bodyParser.urlencoded({ extended: false });

const port = 3000;

app.use(cors());
app.use(jsonParser);
app.use(urlencodeParser);

app.get("/", (req, res) => {
  res.json("wesite A");
});

app.post("/github-event", (req, res) => {
  if (req.body.secret !== "secret123") {
    return res.status(403).json({ error: "Invalid secret" });
  }
  if ( req.body.event == 'event-1'){
    console.log('Incomming Webhook 1 ')
    res.json("")
}else if (req.body.event == 'event-2') {
    console.log('Incomming Webhook 2 ')
    res.json("")
  }
})

app.listen(port, () => {
  console.log(`Example app listening at on port ${port}`)
})