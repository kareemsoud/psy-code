const errorHandler = (err, req, res, next) => {
  console.error({
      message: err.message,  
      method: req.method,
      url: req.originalUrl,
  });

  const statusCode = err.statusCode || 500;
  const responseMessage = 'Internal Server Error';
  res.status(statusCode).json({ error: responseMessage });
};

  
  module.exports = errorHandler;
  