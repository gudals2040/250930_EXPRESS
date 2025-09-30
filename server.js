const express = require("express"); // npm install express
// tailwind, bootstrap -> 의존성 , 설치.
const app = express();
const port = 3000;

// Get -> Fetch, Get/Post
app.get("/", (req, res) => {
  // localhost:3000/ -> GET/접속 (브라우저를 통한 접속)
  // res.send("Hello World");
  res.send("Bye Earth!");
});

// listen -> server를 구동. -> localhost: 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
