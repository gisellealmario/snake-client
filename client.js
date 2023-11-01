const net = require("net");
const { IP, PORT } = require("./constants"); // Import IP and PORT from your constants file

const connect = function() {
  const conn = net.createConnection({
    host: IP, // Use IP from constants
    port: PORT, // Use PORT from constants
  });

  conn.on("connect", () => {
    console.log("Successfully connected to the game server");
    conn.write("Name: GTR");
  });

  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;
