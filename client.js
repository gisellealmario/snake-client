const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243 ",
    port: 50541,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: GTR");
    conn.write("Move: up"); // Send "Move: up" when you connect
  });

  conn.setEncoding("utf8");

  setInterval(() => {
    conn.write("Move: up");
  }, 50);

  conn.on("error", (error) => {
    console.error("Connection error:", error);
  });
  conn.on("close", () => {
    console.log("Connection closed.");
  });


  // interpret incoming data as text


  return conn;
};

module.exports = connect;