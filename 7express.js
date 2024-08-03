/*
const url1 = require("./7express");
url1.EpxressFun();

*/

//*****************Routing INCLUDED *****************

const http = require("http");
const express = require("express");

//app is handler function
const app = express();

app.get("/",(req,res)=>{
    res.send("Home page");

});
app.get("/about",(req, res) => {
    //can pass name as
    //http://localhost:8000/about?name=45&age=res
    return res. send("Hello From About Page" + " hey " + req. query. name)
    });

/*Way 1 routing
      ROUTING to implement from old project
        app.route("/api/users/:id")
.get((req, res) => {
const id = Number(req.params.id);
const user = users.find((user) => user.id === id);
return res.json(user);
})
.put((req, res) => {})
.delete((req,res) => {});

*/

//way 2 Routing    ******************************
const router = e.Router();
app.use('/api',router);
//--------------------------------------------------------------
router.get('/',(req,res)=>{ //**************req res
    res.send("api router /");
});
router.get('/users',(req,res)=>{//**************req res
    res.send("api router /users");
});
//--------------------------------------------------------------
app.get('/',(req,res)=>{//**************req res
    res.send("home page /");
});
//--------------------------------------------------------------
const EpxressFun = () => {
   // const myServer = http.createServer(app);
    app.listen(8000, () => console.log("Server Started!"));
}

module.exports={
    EpxressFun

}    