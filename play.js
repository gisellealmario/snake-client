const net = require("net");

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // Interpret incoming data as text
  conn.setEncoding("utf8");

  // Event handler for errors
  conn.on("error", (error) => {
    console.error("Connection error:", error);
  });

  // Event handler for when the connection is closed
  conn.on("close", () => {
    console.log("Connection closed.");
  });

  return conn;
};

console.log("Connecting ...");
const connection = connect();
