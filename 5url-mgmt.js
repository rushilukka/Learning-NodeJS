/*
const url1 = require("./url-mgmt");
url1.UrlMgmt();
*/
const url = require("url");
const http = require("http");
const UrlMgmt=()=>{
    const myServer = http.createServer((req, res) => {
        if (req.url === "/favicon.ico") return res.end();


   

        const MyUrl = url.parse(req.url,true);
        //***this true makes ObJof Query */ 
        // So now MyUrl.query.name ALSO REQ
        //if no true USE : MyUrl.query ONLY


        /***Vimp for sperate *****/
        switch (MyUrl.pathname) {
            case "/": 
            //localhost:8000?name=Rushi&y=5
            //Query : _____?name=Rushi+Lukka+14&id=262
                console.log(MyUrl);
                console.log("\nQuery : "+MyUrl.query.x);
                console.log("\nPath : "+MyUrl.path);
                res.end(`URL segregated Done ${MyUrl.query.name}`)
               // res.end("HomePage") ;
            break;
            
            
            case "afshin", "saeed", "larry":
                res.end("I am Piyush Garg");
            break;

            case "afshin":
            case "saeed":
            case "larry":
                break;
            default:
            res. end ("404 Not Found");
        }
    });
    myServer. listen(8000, () => console.log("Server Started!"));
}
module.exports={
UrlMgmt

} 