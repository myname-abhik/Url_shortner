const express = require('express');
require('dotenv').config();
PORT = process.env.PORT ||5000;
PASSWORD = process.env.PASSWORD
const Router = require('./routes/url');
const URL = require('./models/url')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use('/url',Router);
app.post('/url1',(req, res)=>{
     body = req.body
     return res.json(body);
})

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
  );
  res.redirect(entry.redirect_Url);
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});