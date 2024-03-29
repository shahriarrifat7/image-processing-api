"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var image_static_1 = require("../static/image-static");
var sharp_1 = __importDefault(require("sharp"));
var path_1 = __importDefault(require("path"));
var ImageController = /** @class */ (function () {
    function ImageController() {
        var _this = this;
        this.resize = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var inpDir, outDir, fileName, height, width, imageFileNameWithoutExt, outputFilePath, s_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        inpDir = path_1.default.join(__dirname, '..', 'public', 'images');
                        outDir = path_1.default.join(__dirname, '..', 'output-images');
                        fileName = req.params && req.params.fileName;
                        height = req.query && req.query.height;
                        width = req.query && req.query.width;
                        imageFileNameWithoutExt = fileName === null || fileName === void 0 ? void 0 : fileName.split('.').shift();
                        if (!this.isFileExists(inpDir + "/" + fileName)) return [3 /*break*/, 3];
                        if (!!this.isFileExists(outDir + "/" + imageFileNameWithoutExt + "-" + width + "x" + height + "." + image_static_1.imageStatic.imageExtension)) return [3 /*break*/, 2];
                        return [4 /*yield*/, sharp_1.default(inpDir + "/" + fileName)
                                .resize({ width: Number(width), height: Number(height) })
                                .toFormat('jpeg')
                                .png({ quality: 100 })
                                .toFile(outDir + "/" + imageFileNameWithoutExt + "-" + width + "x" + height + "." + image_static_1.imageStatic.imageExtension)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        outputFilePath = outDir + "/" + imageFileNameWithoutExt + "-" + width + "x" + height + "." + image_static_1.imageStatic.imageExtension;
                        s_1 = fs.createReadStream(outputFilePath);
                        s_1.on('open', function () {
                            res.set('Content-Type', 'image/jpeg');
                            s_1.pipe(res);
                        });
                        s_1.on('error', function () {
                            res.set('Content-Type', 'text/plain');
                            res.status(403).end('Forbidden');
                        });
                        res.status(200);
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(404).end('Not found');
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
    }
    ImageController.prototype.isFileExists = function (fileName) {
        try {
            fs.accessSync(fileName, fs.constants.F_OK);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    return ImageController;
}());
exports.default = ImageController;
