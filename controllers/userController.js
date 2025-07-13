import Booking from './../models/Booking.js';
import { clerkClient } from '@clerk/clerk-sdk-node';


const getUserBookings = async(req, res) =>{

    try {
        const user = req.auth().userId;
        const bookings = await Booking.find({user}).populate({
            path:"show",
            populate:{path:"movie"}
        }).sort({createdAt:-1})

        res.json({success: true,bookings, message:"User bookings get successfully"});
        
    } catch (error) {
        consol.log(error.message)
        res.json({success: false,message:error.message})
    }
}

const updateFavorite = async() =>{
    try {
        const {movieId} = req.body;
        const userId = req.auth().userId;
        const user = await clerkClient.users.getUser()
        if(!user.privateMetadata.favorites) {
            user.privateMetadata.favorites = [];
        }
        if(!user.privateMetadata.favorites.includes(movieId)) {
            user.privateMetadata.favorites.push(movieId);
        }else{
            user.privateMetadata.favorites = user.privateMetadata.favorites.filter(id => id !== movieId); 
        }




        await clerkClient.users.updateUserMetadata(userId, {
            privateMetadata: user.privateMetadata
        });
        res.json({success: true, message:"Favorite movies updated successfully"});
    } catch (error) {
        consol.log(error.message)
        res.json({success: false,message:error.message})
    }
}

const getFavorites = async(req, res) => {
    try {
        const userId = req.auth().userId;
        const user = await clerkClient.users.getUser(userId);
        const favorites = user.privateMetadata.favorites 

        const movies = await Movie.find({
            _id: {$in: favorites}
        })
        
        res.json({success: true, movies, message:"Favorite movies fetched successfully"});
    }catch (error) {
        consol.log(error.message)
        res.json({success: false,message:error.message})
    }
}





export const userController = {
    getUserBookings,
    updateFavorite,
    getFavorites
}