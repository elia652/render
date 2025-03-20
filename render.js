const express = require("express");
const app = express();
const PORT = process.env.PORT || 3030;

let data={'name':"elia","age":"21"};

app.get('/', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});