const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

let cat = 0;
let dog = 0;

app.get('/', (req, res) => {
  if (req.query.favorite === 'dog') dog++;
  if (req.query.favorite === 'cat') cat++;

  console.log(`강아지 : ${dog} / 고양이 : ${cat}`);

  res.status(200).send('투표에 참여해 주셔서 감사합니다!');
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번에서 실행 중입니다!`);
});
