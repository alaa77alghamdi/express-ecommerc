const express = require("express");

const app = express();

const port = 3005;


app.get("/", (req, res) => {
    res.send("welcome to server");
  });

app.get("/products", (req, res) => {
  res.send({
    products: [
      { id: 1, title: iphone12, price: 5000 },
      { id: 2, title: iphone13, price: 5000 },
      { id: 3, title: iphone14, price: 5000 },
    ],
  });
});


app.listen(port, () => {
  console.log(`run at server${port}`);
});
