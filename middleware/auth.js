import clerkClient from "@clerk/clerk-sdk-node";


export const protectAdmin = async(req, res, next) =>{
    try {
        const {userId} = req.auth()
        const user = await ClerkClient.users.getUser(userId)
        if(user.privateMetadata.role !== 'admin'){
            return res.json({success:false, message:"not authorize"})
        }
        
    } catch (error) {
        return res.json({success:false, message:"not authorize"})
    }
}