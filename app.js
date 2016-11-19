"use strict";
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
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
        this.app.use(express.static(path.join(__dirname, "public")));
        this.app.use(express.static(path.join(__dirname, "bower_components")));
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
    }
    routes() {
        let router;
        router = express.Router();
        var hotels = new hotelsMod.Hotels();
        router.get("/hotesl/:id", hotels.findById);
        router.get("/hotesl/:start?/:show?", hotels.findAll);
        this.app.use(router);
    }
}
var server = Server.bootstrap();
module.exports = server.app;
