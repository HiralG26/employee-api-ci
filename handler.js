//const AWS = require("aws-sdk");
//const express = require("express");
const serverless = require("serverless-http");

const app = require('./routes/app')

//if u want to deploy in beanstalk 
//app.listen(5000)

module.exports.handler = serverless(app);
