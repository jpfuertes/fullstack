"use strict";

import * as express from "express";

module HotelsModule {

  export class Hotels {

  public findById(req: express.Request, res: express.Response, next: express.NextFunction) {
    var id = req.params.id;
    res.send("");
  }

  public findAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    var show = req.params.show;
    var start = req.params.start;
    res.send("");
   }
  }
}

export = HotelsModule;