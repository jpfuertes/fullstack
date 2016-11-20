"use strict";

import * as express from "express";
import hotelEntity = require("./entities");

export class Hotels {

  constructor() {
  }

  public findById(req: express.Request, res: express.Response, next: express.NextFunction) {
    let id = req.params.id;
    hotelEntity.HotelModel.findById(id,'name price stars')
      .lean()
      .exec(function (err, hotel) {
        res.send(JSON.stringify(hotel));
      });
  }

  public findAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    let start:number = 1;
    let show:number = 10;
    try {
        start = parseInt(req.params.start);
        show = parseInt(req.params.show);
    } catch (err) {

    }

    hotelEntity.HotelModel.find({},'name price stars')
      .lean()
      .exec(function (err, hotels) {
        res.send(JSON.stringify(hotels));
      });
  }
}
