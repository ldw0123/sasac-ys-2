const express = require('express'); //express 모듈 import
const app = express(); // server 객체
const PORT = 8000; // 포트
// 1 ~ 65536 존재, 1 ~ 1023까지는 정해진 기능이 있음.
// 보통 3000, 8000, 8080, 8010, 3010, 3001
// 3306 : mysql에서 사용함.

// app객체의 view engine 설정을 ejs로 변경
app.set("view engine", "ejs");
// app 객체의 view 폴더 설정. 기본값 : ./views
// 만약 ./view 폴더로 바꾸고 싶다면 아래처럼 작성하면 됨. 위 줄 처럼 기본값은 ./views임 view가 아님! ! ! ! ! 
// app.set("views","./view");

app.use("/static", express.static(__dirname + "/static"));
// __dirname : c:/users/ ~~~ /01-express/static에 클라이언트가 를 /static 이름으로 들어올 수 있다.

// app.use("/public", express.static(__dirname + "/static"));
// __dirname : c:/users/ ~~~ /01-express/static에 클라이언트가 를 /public 이름으로 들어올 수 있다.

// app 객체에 있는 get 메소드(http 메소드) : 클라이언트가 요청할 수 있는 방법들을 정의함.
// localhost:8000/ 
app.get('/', function (req, res) {
    // 응답 객체 내의 send 메소드 실행. "hello express" 문자열을 응답으로
    // send : 값을 보냄
    res.send('hello express');
});
// http 메소드의 두 번째 인자로 넘겨주는 콜백함수의 매개변수 2개
// 첫 번째 매개변수, request 객체 (요청)
// 두 번째 매개변수, response 객체 (응답)

//  /test
app.get('/test', function (req, res) {
    // 응답 객체 내의 send 메소드 실행. "hello express" 문자열을 응답으로
    // res.send("<div> 안녕 </div>");/
    console.log(__dirname); // 파일의 절대 경로가 찍힌다.
    res.sendFile(__dirname + "/index.html");
    // res.sendFile("/index.html");
});

app.get("/ejs", function(req, res){
    // render의 메소드의 기본 dir "./views" == res.render의 위치 & 확장자 안 적어도 됨.
    // res.render("index");
    res.render("test/index");
})

app.get("/lily", function(req, res) {
    res.render("lily", {
        name: "lily",
        product: ["운동화", "후드집업", "슬리퍼"] 
        
    });  
})

// 서버를 연다. 서버가 열린 후 어떤 동작을 할지에 대한 함수. == 서버가 열리고 콘솔이 찍힌다.
// localhost:8000
// 127.0.0.1:8000
app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}! http://localhost:${PORT}`);
});