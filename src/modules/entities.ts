import * as mongoose from "mongoose";

export interface IHotel extends mongoose.Document {
    name: string;
    start: string;
    price: string;
};

export let hotelSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    price: {type: String, required: true, unique: false},
    start: {type: String, required: true, unique: false},
});

export let Hotel = mongoose.model<IHotel>("Hotel", hotelSchema);
module.exports = Hotel;
