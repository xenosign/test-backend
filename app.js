const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  console.log(req.params);

  res.status(200).send('투표에 참여해 주셔서 감사합니다!');
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번에서 실행 중입니다!`);
});
