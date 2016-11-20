"use strict";
const mongoose = require("mongoose");
const hotelEntity = require("./../src/modules/entities");
let hotelData = require("./init.json");
mongoose.connect("mongodb://127.0.0.1/fullstackdb", function (err) {
    if (err) {
        console.log("Unable to connect to mongodb");
    }
});
for (let hotel of hotelData.hotels) {
    console.log("Creating entity: " + hotel.name);
    let hotelEntry = new hotelEntity.HotelModel({
        name: hotel.name,
        price: hotel.price,
        start: hotel.start,
    });
    hotelEntry.save(function (err) {
        if (err) {
            console.log("Unable to create hotel:" + hotel.name);
        }
        else {
            console.log("Succesfully created hotel: " + hotel.name);
        }
    });
}
mongoose.disconnect();
