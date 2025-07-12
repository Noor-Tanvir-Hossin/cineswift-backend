import Booking from "../models/Booking.js"
import Show from "../models/Show.js"

const isAdmin = async(req,res) =>{
    res.json({success: true, isAdmin:true})
}

//api to get dashboard data
 const getDashboardData = async(req, res) =>{
    try {
        const bookings = await Booking.find({isPaid:true})
        const activeShows = await Show.find({showDateTime:{$gte: new Date()}}).populate('movie');
        totoalUser = await User.countDocuments()
        const dashboardData = {
            totalBookings : bookings.length,
            totalRevenue: bookings.reduce((acc, booking)=> acc + booking.amount, 0),
            activeShows,
            totoalUser
        }       
        res.json({success: true,
            dashboardData,message:"Dashboard data get Successfully."})
 
    } catch (error) {
        consol.log(error.message)
        res.json({success: false,message:error.message})
    }
 }

const getAllShowsFromDB = async(req,res) =>{
    try {
        const shows = await Show.find({showDateTime:{$gte: new Date()}}).populate('movie');
        res.json({success: true,
            shows,message:"All active show retrieve successfuly."})

    } catch (error) {
        consol.log(error.message)
        res.json({success: false,message:error.message})
    }
 }

 const getAllBookingsFromDB = async(req,res) =>{
    try {
        const bookings = await Booking.find({}).populate('user').populate({
            path:"show",
            populate:{path:"movie"}
        }).sort({createdAt:-1})
        res.json({success: true,
            bookings,message:"All bookings retrieve successfuly."})
    } catch (error) {
        consol.log(error.message)
        res.json({success: false,message:error.message})
    }
 }


 export const adminController = {
    isAdmin,
    getDashboardData,
    getAllShowsFromDB,
    getAllBookingsFromDB,

 }