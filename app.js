const express = require("express");
const morgan = require("morgan");
const models = require('./models');
const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(express.static('/public'));
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.send(console.log('heeeyyyy world'));
});

const init = async () => {
  try {
    await models.db.sync();
    app.listen(PORT, () => {
      console.log('wasup')
    })
  } catch(e) {
    res.send('Nah', e);
  }
}
init()

