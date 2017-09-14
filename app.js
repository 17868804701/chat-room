const express = require('express');
const router = require("./routes/router");
const bodyParser = require("body-parser");
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


const http = require('http').Server(app);
const io = require('socket.io')(http);

const session = require('express-session');


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
//模板引擎
app.set("view engine","ejs");
//静态服务
app.use(express.static("./public"));



app.get("/index",router.showIndex);//显示首页面

app.post('/check',router.check);//用户登录

app.get('/chat',router.chat);


app.listen(3000);