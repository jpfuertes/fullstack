"use strict";
var HotelsModule;
(function (HotelsModule) {
    class Hotels {
        findById(req, res, next) {
            var id = req.params.id;
            res.send("hola mundo");
        }
        findAll(req, res, next) {
            var show = req.params.show;
            var start = req.params.start;
            res.send("hola mundo 2");
        }
    }
    HotelsModule.Hotels = Hotels;
})(HotelsModule || (HotelsModule = {}));
module.exports = HotelsModule;
