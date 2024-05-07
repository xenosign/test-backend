const express = require('express');
const app = express();
const PORT = 4000;

app.get((req, res) => {
  console.log(req.param);

  res.end();
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번에서 실행 중입니다!`);
});
