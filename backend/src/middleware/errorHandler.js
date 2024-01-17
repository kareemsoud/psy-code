const errorHandler = (err, req, res, next) => {
  console.error({
      message: err.message,
      stack: err.stack,
      method: req.method,
      url: req.originalUrl,
      ip: req.ip,
  });

  const statusCode = err.statusCode || 500;
  const responseMessage = err.message || 'Internal Server Error';
  res.status(statusCode).json({ error: responseMessage });
};

  
  module.exports = errorHandler;
  