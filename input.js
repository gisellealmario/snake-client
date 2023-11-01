let connection;

const setupInput = (conn) => {
  connection = conn; // Assign the connection object to the variable in the outer scope
  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit(); // Ctrl + C to exit the game
  } else if (key === 'w') {
    connection.write("Move: up"); // Send "Move: up" to the server
  } else if (key === 'a') {
    connection.write("Move: left"); // Send "Move: left" to the server
  } else if (key === 's') {
    connection.write("Move: down"); // Send "Move: down" to the server
  } else if (key === 'd') {
    connection.write("Move: right"); // Send "Move: right" to the server
  }
};

module.exports = setupInput;
