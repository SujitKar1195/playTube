const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => {
      next(err);
    });
  };
};

export { asyncHandler };

// another way to do the upper code is given below

//const asyncHandler = (fn) => async (req, res, next) => {
//  try {
//    await fn(req, res, next);
//  } catch (error) {
//    res.status(error.code || 500).json({
//      success: false,
//      message: error.message,
//    });
//  }
//};
