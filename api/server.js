// implement your server here
// require your posts router and connect it here

const express = require("express")
//place routers require here
const postsRouter = require('./posts/posts-router')

const server = express();

server.use(express.json());
//place routers use here
server.use("/api/posts/", postsRouter)

module.exports = server;
//dont forget to add this