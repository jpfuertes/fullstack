import * as mdb from "mongoose"

interface IHotel{
    name:string;
    starts:string;
    price:string;
}

interface IHotelModel extends IHotel, mdb.Document{};

var hotelSchema = new mdb.Schema({
    name: String,
    starts: String,
    price: String,
});

var Hotel = mdb.model<IHotelModel>("Hotel", hotelSchema);

export = Hotel;