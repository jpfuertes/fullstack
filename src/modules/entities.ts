import * as mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1/fullstackdb", function (err) {
    if (err) {
        console.log("Unable to connect to mongodb");
    }
});

interface IHotel extends mongoose.Document {
    name: string;
    price: string;
    stars: string;
};

let hotelSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    price: { type: String, required: true, unique: false },
    stars: { type: String, required: true, unique: false },
    }
);

export let HotelModel = mongoose.model<IHotel>("Hotel", hotelSchema);
// module.exports = HotelModel;
