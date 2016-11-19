"use strict";
var HotelsModule;
(function (HotelsModule) {
    class Hotels {
        findById(req, res, next) {
            var id = req.params.id;
            res.send("");
        }
        findAll(req, res, next) {
            var show = req.params.show;
            var start = req.params.start;
            res.send("");
        }
    }
    HotelsModule.Hotels = Hotels;
})(HotelsModule || (HotelsModule = {}));
module.exports = HotelsModule;
