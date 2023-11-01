
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

let conn;

const handleUserInput = function (key) {
  // Check for specific user input and send corresponding commands to the server
  if (key === '\u0003') {
    // Ctrl + C to exit the game
    process.exit();
  } else if (key === 'w') {
    // 'w' key for moving the snake up
    conn.write("Move: up");
  } else if (key === 's') {
    // 's' key for moving the snake down
    conn.write("Move: down");
  } else if (key === 'a') {
    // 'a' key for moving the snake left
    conn.write("Move: left");
  } else if (key === 'd') {
    // 'd' key for moving the snake right
    conn.write("Move: right");
  }
};

module.exports = setupInput;