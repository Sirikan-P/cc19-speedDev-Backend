module.exports.chat = async (req,res) => {
    try {
        res.json({success:true, message:"correct"})
    } catch (error) {
        console.log(error)
    }
}