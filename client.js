const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });
  
  conn.on("connected", () => {
    console.log("Successfully connected to game server" );
    setName(conn, "GTR");

  });
  conn.on("error", (error) => {
    console.error("Connection error:", error);
  });
  conn.on("close", () => {
    console.log("Connection closed.");
  });


  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;