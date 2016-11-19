"use strict";
const mdb = require("mongooes");
;
var hotelSchema = new mdb.Schema({
    name: String,
    starts: String,
    price: String,
});
var Hotel = mdb.model("Hotel", hotelSchema);
module.exports = Hotel;
