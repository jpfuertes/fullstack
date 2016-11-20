"use strict";
const hotelEntity = require("./entities");
class Hotels {
    constructor() {
    }
    findById(req, res, next) {
        let id = req.params.id;
        hotelEntity.HotelModel.findById(id, 'name price stars')
            .lean()
            .exec(function (err, hotel) {
            res.send(JSON.stringify(hotel));
        });
    }
    findAll(req, res, next) {
        let start = 1;
        let show = 10;
        try {
            start = parseInt(req.params.start);
            show = parseInt(req.params.show);
        }
        catch (err) {
        }
        hotelEntity.HotelModel.find({}, 'name price stars')
            .lean()
            .exec(function (err, hotels) {
            res.send(JSON.stringify(hotels));
        });
    }
}
exports.Hotels = Hotels;
