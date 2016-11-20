"use strict";
const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/fullstackdb", function (err) {
    if (err) {
        console.log("Unable to connect to mongodb");
    }
});
;
let hotelSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true, unique: false },
    stars: { type: String, required: true, unique: false },
});
exports.HotelModel = mongoose.model("Hotel", hotelSchema);
