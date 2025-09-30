const express = require("express"); // npm install express
const path = require("path");
// tailwind, bootstrap -> 의존성 , 설치.
const app = express();
const port = 3000;

// Get -> Fetch, Get/Post
app.get("/", (req, res) => {
  // localhost:3000/ -> GET/접속 (브라우저를 통한 접속)
  // res.send("Hello World");
  // res.send("Bye Earth!");
  res.sendFile(path.join(__dirname, "index.html"));
});

// (req, res) 는 파라미터
// ai -> fetch.
app.post("/gemini", async (req, res) => {
  // localhost:3000/gemini POST -> 응답
  // 1. fetch.
  const model = "gemini-2.5-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const apiKey = "";
  const headers = {
    "x-google-api-key": apiKey,
    "Content-Type": "application/json",
  };
  const payload = {
    contents: [{ parts: [{ text: "오늘 저녁 메뉴 추천" }] }],
  };
  const response = await fetch(url, {
    headers,
    body: JSON.stringify(payload),
  });
  // 2. 라이브러리. (sdk)
  //   return res.json({ result: "ok" });
  return res.json(await response.json());
});