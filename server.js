console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

/* Bitimchi qadamga biz exress_dan kelayotgan malumotlardi kiritamiz.  */
// 1: Kirish code
app.use(express.static("public"));  // =>bu linr msnodi xammaga korinishi uchun;
app.use(express.json());            //  kirib kelayotgan "express.js"  data_ni object korinishiga ogirib beradi

app.use(express.urlencoded({extended: true}));

// 2 Session code

// 3  Views code (BSSR) => traditional way
app.set("views", "views");
app.set("views engine", "ejs"); //BSSR backend server side rendring


// 4 Routingcode

app.get("/hello", function(req, res) {
    res.end(`<h1">HELLO WORLD </h1>`);
});
app.get("/gift", function(req, res) {
    res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function() {
console.log(`The server is running succesfully on port: ${PORT}`);
});