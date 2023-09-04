// const ps = process.env;//process.env는 환경변수임
// console.log(ps);
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config(); //config method를 불러와야 환경변수를 설정하고 사용가능함

const PORT = process.env.PORT;
app.get('/', (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.NODE);
  res.send('Hello,World');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
