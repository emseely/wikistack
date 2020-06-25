const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(console.log('heeeyyyy world'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('wasup')
})
