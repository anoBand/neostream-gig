const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 'public' 디렉터리의 정적 파일(html, css, js)을 제공합니다.
app.use(express.static(path.join(__dirname, 'public')));

// (게시판 기능 삭제)
// /messages GET, POST 라우트(API)를 모두 제거했습니다.

// 서버 실행
app.listen(PORT, () => {
    console.log(`Neostream GIG 서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});