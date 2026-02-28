import * as fs from "node:fs";

let content = '';
setTimeout(() => console.log(content), 0);

fs.readFile("./files", "utf-8", (err, data) => {
  const files = data.split("\n");

  files.forEach((file) => {
    fs.readFile(`./${file}`,"utf8",(err,data) => {
      content += data;
      // console.log("content inside the loop = ",content);
    })
  })

  // console.log("content after the loop",content);
  
  
  // fs.readFile(`./${content[0]}`,"utf8",(err,data) => {
  //   const file1Content = data;
  //   fs.readFile(`./${content[1]}`,"utf8",(err,data) => {
  //     const file2Content = data;
  //     console.log(file1Content + file2Content);
  //   })
  // })
});
console.log("\t\toutside readFile");
