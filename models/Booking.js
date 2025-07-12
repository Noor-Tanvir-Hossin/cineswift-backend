import mongoose  from 'mongoose';

const bookingSchema = new mongoose.Schema({
    user: {type:String, required: true, ref:'User'},
    show: {type:String, required: true, ref:'Show'},
    amount: {type:Number, required: true},
    bookSeats: {type:Array, required: true},
    isPaid: {type:Booleans, required: true},
    PaymenLink: {type:String},
})

const Movie = mongoose.model('Booking', bookingSchema)

export default Movie;