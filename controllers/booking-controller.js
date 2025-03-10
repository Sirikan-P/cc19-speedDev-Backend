exports.booking = (req, res, next) => {
  try {
    res.json({message: "Hello, booking!!!"})
  } catch (error) {
    console.log(error)
  }
}