import https from "https";
import chalk from "chalk";

function getNewjoke() {
  const getJoke = () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        console.log(chalk.blue("Joke of the day"));
        console.log(chalk.green(JSON.parse(data).setup));
        console.log(chalk.red(JSON.parse(data).punchline));
        console.log(chalk.blue("Thank you for using the joke generator!"));
      });
      res.on("error", (err) => {
        console.log("An error occurred");
      });
    });
  };
  getJoke();
}

async function displayJoke() {
  await getNewjoke();
}

displayJoke();
