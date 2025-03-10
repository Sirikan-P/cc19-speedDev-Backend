exports.getLoving = (req, res, next) => {
  try {
    res.status(200).json({
      message: "Loving get",
    });
  } catch (error) {
    next(error);
  }
};
