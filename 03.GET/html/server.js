//console.log('hello World!')
//http模塊一般都不會改變因此可以用const宣告
const http = require("http");

//createServer會回傳一個serverObj
//request->獲得前端發送過來的請求訊息
//response->要回傳回前端的訊息

//導入file system模塊 才能適用fs.readFile的函數讀取HTML文件
const fs = require("fs");

const sendResponse = (filename, statusCode, response) => {
  fs.readFile(`${filename}`, (error, data) => {
    if (error) {
      response.statusCode = 500;
      //設定回傳資料.end()裡的資料型態
      //TODO: WHY ?? 因為要回傳回Ｎetwork裡？ 
      response.setHeader("Content-Type", "text/plain");
      response.end("Sorry, internal error");
    } else {
      response.statusCode = statusCode;
      response.setHeader("Content-Type", "text/html");
      response.end(data);
    }
  });
};

const server = http.createServer((request, response) => {
  console.log(request.url, request.method);
  const method = request.method;
  const url = request.url;

  if (method === "GET") {
    if (url === "/") {//"/"代表根目錄(index.html)
      //sendResponse(讀取的文件,狀態碼,response)
      //200代表成功
      sendResponse("index.html", 200, response);
    } else if (url === "/about.html") {
      sendResponse("about.html", 200, response);
    } else {
      sendResponse("404.html", 404, response);
    }
  } else {

  }
  //response.end('Hello 123');
});

const port = 3000;
const ip = "127.0.0.1";

server.listen(port, ip, () => {
  console.log(`Server is running at http://${ip}:${port}`);
});