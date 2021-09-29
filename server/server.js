const express = require('express') 
const app = express() 
const port = 3001 // React의 기본값은 3000 이므로, 기본값이 아닌 포트

app.get('/', (req, res) =>{
    res.send('DB테이블 구축 연습')
})

app.listen(port, ()=>{
    console.log(`Connect at http://localhost:${port}`); // (') 가 아닌 좌측 상단의 Esc 버튼 밑에 있는 (`) 이다.
})
