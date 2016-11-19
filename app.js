"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const hotelsMod = require("./modules/hotels");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    static bootstrap() {
        return new Server();
    }
    config() {
        this.app.set("view engine", "jade");
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
    }
    routes() {
        let router;
        router = express.Router();
        var hotels = new hotelsMod.Hotels();
        router.get("/hotels/:id", hotels.findById);
        router.get("/hotels/:start?/:show?", hotels.findAll);
        this.app.use(router);
    }
}
var server = Server.bootstrap();
module.exports = server.app;
