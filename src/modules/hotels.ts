"use strict";

import * as express from "express";
import Hotel = require("./entities");

export class Hotels {

  public findById(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    res.send("findById");
  }

  public findAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    let start = req.params.start;
    let show = req.params.show;
    Hotel.Hotel.find({ published: true })
      .lean()
      .limit(20)
      .exec(function (err, hotels) {
        res.send(JSON.stringify(hotels));
      });
  }
}

module.exports = Hotels;
