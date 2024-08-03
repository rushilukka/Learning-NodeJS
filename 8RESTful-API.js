const express = require("express");
const app = express();
const PORT = 8000;
const userdata = require("./MOCK_DATA.json");
const fs = require("fs");
//Middleware must req to handle req.body data
//app.use(express.urlencoded({ extended: true }));


//Must Req for req.body -----------------------------------------------------------
const bodyParser = require('body-parser');
app.use(bodyParser.json());
//-----------------------------------------------------------

app.get("/",(req,res)=>{
    res.send("home Page");
});
//-----------------------------------------------------------
//To make Hybrid server
app.get("/showall",(req,res)=>{ //for Phone 
    //send html to phone
    const html =
        `
            <ul>
            ${userdata.map((user) => `<li>${user.first_name}</li>`).join("")}
            </ul> 
        `
        // .join("") to remove extra , in b/w each line
        res. send (html);
});

//-----------------------------------------------------------
app.route("/api/users/:id")
.get((req, res) => {
const id = Number(req.params.id);
const user = userdata.find((user) => user.id === id);
return res.json(user);
})
.patch((req, res) => {
    const id = Number(req.params.id);
    const user = userdata.find((user) =>{ 
        if(user.id === id){
            
     }
    });
    const newData = {...user , first_name :"NRL"}

    
})
.delete((req,res) => {

});

//-----------------------------------------------------------
    //Can't by browser , req POSTMAN
        app.post("/api/users", (req, res) => {
            const body = req.body;
            userdata.push({ ... body, id: userdata.length + 1 });
            fs.writeFile("./MOCK_DATA.json", JSON.stringify(userdata), (err, data) => {
                if(err) return res.json({ status: "Error" });

            return res.json({ status: "Success" });
            });    
           });    
        

const MyApiFun=()=>{
    app.listen(PORT,()=>{console.log(`Listening on PORT ${PORT}`)})
}



module.exports={
    MyApiFun
}    