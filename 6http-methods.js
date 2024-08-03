/*
const url1 = require("./6http-methods");
url1.HttpMethods();

*/
const url = require("url");
const http = require("http");
function Tocreateserver (req, res) {
    if (req.url === "/favicon.ico") return res.end();

    const MyUrl = url.parse(req.url,true);
    switch (MyUrl.pathname) {
        case "/": 
     console.log(req.method);
     if(req.method ==='GET')   res.end(`URL segregated Done `);
     else if(req.method ==='POST'){  
        //form fill entry in DB
        res.end(`FORM`);
    } 
        break;
        
        
        default:
        res. end ("404 Not Found");
    }
}
const HttpMethods=()=>{
    const myServer = http.createServer(Tocreateserver);
    myServer. listen(8000, () => console.log("Server Started!"));
}
module.exports={
    HttpMethods

} 