/**
 * Created by jiunuo on 2017/9/14.
 */
exports.showIndex = function (req,res) {
  res.render('index')
};
let allUser = [];
exports.check = function (req,res,next) {

    let username = req.body.username;
    console.log(username);
    if(req.body.username===''){
        res.json({"err":-1});
    }
   else if(allUser.indexOf(username) != -1){
        res.json({"err":-2});
    }
    allUser.push(username);
    req.session.username = username;
    res.redirect('/');
};

exports.chat = function (req,res,next) {
    if(!req.session.username){
        res.redirect("/index");
        return;
    }
    res.render('chat',{
        "username" : req.session.username
    })
};