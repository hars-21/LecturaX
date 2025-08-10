class ExpressError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.message = message;

    // Capture stack trace for debugging
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ExpressError;
