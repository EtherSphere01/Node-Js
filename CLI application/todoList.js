import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const todos = [];

const showMenu = () => {
  console.log("\n 1: Add a task");
  console.log("\n 2: View tasks");
  console.log("\n 3: Exit");
  rl.question("Choose an option: ", handleInput);
};


const handleInput = (option) => {
  if (option == 1) {
    rl.question("Enter a task: ", (task) => {
      todos.push(task);
      console.log("Task added successfully");
      showMenu();
    });
  } else if (option == 2) {
    console.log("\n Tasks: ");
    todos.forEach((task, index) => {
      console.log(`${index + 1}: ${task}`);
    });
    showMenu();
  } else if (option == 3) {
    rl.close();
  } else {
    console.log("Invalid option");
    showMenu();
  }
};


showMenu();
