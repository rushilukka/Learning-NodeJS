/* index.js
const f = require("./file-mgmt");

//f.Write();
//f.Append();
//f.Copy();
//f.Read();
//f.Unlink();

*/



const fs = require("fs");

const Write=() =>{
   //Use
    fs.writeFile("./test.txt", "Hello World", (err) => {});
   // fs.writeFileSync("./test.txt", "Hello World", (err) => {});
}

const Append=() =>{
   //Use
    fs.appendFile("./test.txt", `\n${Date.now()} Hey There\n`,
    (err) => {
        if (err) {
        console. log("Error", err);
        } 
        });
      // fs.appendFileSync("./test.txt", `\n${Date.now()} Hey There\n`);
    }
    
const Copy= () =>{
   // fs.cp("./test.txt", "./copy.txt",()=>{});
   //Use Sync 
    fs.cpSync("./test.txt", "./copy.txt");
    // Src , Dest 

}
const Read=() =>{
    //Use
    fs.readFile("./test.txt", "utf-8", (err, result) => {
        if (err) {
        console. log("Error", err);
        } else {
        console. log(result);
        }
        });

    // const output= fs.readFileSync("./test.txt", "utf-8");
    // console.log(output);
 }
const Unlink = () =>{
    /* fs.unlink("copy.txt", (err => {
            if (err) console.log(err);
            else {
            console.log("\nDeleted file: example_file.txt");
            }
        }
    )); */
    fs.unlinkSync("./copy.txt");
}

module.exports={
    Write , Read ,Append , Copy  ,Unlink
}

