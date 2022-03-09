const path = require("path")
const express = require("express")
const { port } = require("./config")

//Importando rutas
/*
const userRouter = require("./routes/users")
const authRouter = require("./routes/auth")
*/
const app = express();
app.set("view engine",'pug');
app.set("views","views");
app.use("/static", express.static('./static/'));

app.use(express.text()) 
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))


/*
app.use(userRouter);
app.use(authRouter);
*/

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello project tow!'});
});

app.listen(port,function(){
    console.log("Funcionando... http://localhost:"+port)
})