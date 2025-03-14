import path from "path";
import fs from "fs";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);
console.log(__filename);

const filePath = path.join(__dirname, "student");
console.log(filePath);

fs.mkdir(filePath, (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(path.join(filePath, "student.txt"), "Hello World", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File created successfully");
      }
    });
  }
});
