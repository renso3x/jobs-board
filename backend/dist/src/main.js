"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = require("body-parser");
const cors = require("cors");
const router_1 = require("./router");
const app = express();
app.use(cors('*'));
app.use((0, body_parser_1.json)());
app.use((req, res, next) => {
    console.log('Logging: ', req.originalUrl);
    next();
});
app.use(router_1.default);
app.listen(8080, () => {
    console.log('Server is listening to port 8080');
});
//# sourceMappingURL=main.js.map