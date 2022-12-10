const http = require("http");

function reqListener(req, res) {
  const url = req.url;

  if (url === "/") {
    res.end("HIII")
    // res.write("<html>");
    // res.write("<head><title>Enter</title></head>");
    // res.write(
    //   '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    // );
    // res.write("</html");
    // return res.end("HELLO");
  }
}

http.createServer(reqListener).listen(800, (err) => {
  if (err) {
    console.log("ERRRRpor");
  } else {
    console.log("Connection succesfull");
  }
});
