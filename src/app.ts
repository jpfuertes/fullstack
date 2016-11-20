/// <reference path="_all.d.ts" />
"use strict";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as hotels from "./modules/hotels";

/**
 * The server.
 *
 * @class Server
 */
class Server {

  public static bootstrap(): Server {
    return new Server();
  }

  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config() {
    this.app.set("view engine", "jade");
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });
  }

  private routes() {
    let router: express.Router;
    router = express.Router();

    const hotelInstance: hotels.Hotels = new hotels.Hotels();
    router.get("/hotels/:id", hotelInstance.findById);
    router.get("/hotels/:start?/:show?", hotelInstance.findAll);
    this.app.use(router);
  }
}

const server = Server.bootstrap();
export = server.app;
