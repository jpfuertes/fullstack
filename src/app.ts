/// <reference path="_all.d.ts" />
"use strict";
import * as bodyParser from "body-parser";
import * as express from "express";
import * as path from "path";
import * as hotelsMod from "./modules/hotels";


/**
 * The server.
 *
 * @class Server
 */
class Server {

  public app: express.Application;

  /**
   * Bootstrap the application.
   *
   * @class Server
   * @method bootstrap
   * @static
   */
  public static bootstrap(): Server {
    return new Server();
  }

  /**
   * Constructor.
   *
   * @class Server
   * @constructor
   */
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  /**
   * Configure application
   *
   * @class Server
   * @method config
   * @return void
   */
  private config() {
    this.app.set("view engine", "jade");

    // this.app.use(logger("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));

    // catch 404 and forward to error handler
    this.app.use(function(err: any, req: express.Request, res: express.Response, next: express.NextFunction) {
      err.status = 404;
      next(err);
    });
  }

  /**
   * Configure routes
   *
   * @class Server
   * @method routes
   * @return void
   */
  private routes() {
    //get router
    let router: express.Router;
    router = express.Router();

    var hotels: hotelsMod.Hotels = new hotelsMod.Hotels();
    router.get("/hotels/:id", hotels.findById);
    router.get("/hotels/:start?/:show?", hotels.findAll);
    this.app.use(router);
  }
}

var server = Server.bootstrap();
export = server.app;