import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const apiKey = "ae2f62f1bb01a095c8ac465b";
const url =
  "https://v6.exchangerate-api.com/v6/ae2f62f1bb01a095c8ac465b/latest/USD";

https.get(url, (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    const exchangeRates = JSON.parse(data).conversion_rates;
    console.log(chalk.blue("Currency Converter"));
    console.log(chalk.green("Available currencies:"));
    for (const currency in exchangeRates) {
      console.log(chalk.red(currency));
    }
    rl.question("Enter the currency you want to convert to: ", (currency) => {
      rl.question("Enter the amount you want to convert: ", (amount) => {
        const rate = exchangeRates[currency.toUpperCase()];
        if (rate) {
          console.log(
            chalk.green(
              `Amount in ${currency.toUpperCase()} is ${amount * rate}`
            )
          );
        } else {
          console.log(chalk.red("Invalid currency"));
        }
        rl.close();
      });
    });
  });

  res.on("error", (err) => {
    console.log("An error occurred");
  });
});
