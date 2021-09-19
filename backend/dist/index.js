"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express = (0, express_1.default)();
const app = express;
const port = process.env.PORT || 4000;
const router = require('./routes/index');
app.use(router);
app.listen(port, () => {
    console.log("Listening request on port : " + port);
});
//# sourceMappingURL=index.js.map