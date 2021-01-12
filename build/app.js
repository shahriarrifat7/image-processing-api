"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var image_route_1 = __importDefault(require("./route/image-route"));
var app = express();
app.listen(3000, function () {
    console.log('Image processing API listening on port 3000');
});
app.use(image_route_1.default);
module.exports = app;
