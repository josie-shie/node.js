//console.log('hello World!')
//http模塊一般都不會改變因此可以用const宣告
const http = require("http");
//createServer會回傳一個serverObj
//request->獲得前端發送過來的請求訊息
//response->要回傳回前端的訊息
const server = http.createServer((request,response) => {
    response.end('Hello 123');
});

//node.js必須重啟


const port = 3000 //端口port 0-1023都不能使用
const ip = "127.0.0.1"//IP位置
//端口port,IP位置,回調的函數callback
server.listen(port,ip,()=>{
    console.log(`it running at http://${ip}:${port}`);
});