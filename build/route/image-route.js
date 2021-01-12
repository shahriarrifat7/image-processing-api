"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var router = express.Router();
var image_controller_1 = __importDefault(require("../controllers/image-controller"));
var imageController = new image_controller_1.default();
router.get('/api/image/:fileName/resize', imageController.resize);
router.get("/", function (req, res) {
    res.send("ok");
});
exports.default = router;
