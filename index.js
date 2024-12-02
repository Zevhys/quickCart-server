const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000; // eslint-disable-line

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Server-side for QuickCart",
  });
});

app.use((req, res) => {
  res.status(404).send("404 - Not Found");
});

app.listen(8000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
