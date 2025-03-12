import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const fileCreation = () => {
  rl.question("Enter the file name: ", (filename) => {
    rl.question("Enter the content: ", (content) => {
      fs.writeFile(`${filename}.txt`, content, (err) => {
        if (err) {
          console.log("An error occurred");
        } else {
          console.log("File created successfully");
        }
        rl.close();
      });
    });
  });
};

fileCreation();
