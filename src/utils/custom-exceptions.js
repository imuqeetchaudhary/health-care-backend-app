class HttpError extends Error {
  statusCode;

  constructor({ message, code }) {
    super(message);
    this.statusCode = code || 500;
  }
}

class BadRequest extends HttpError {
  statusCode = 400;
}

class AccessDenies extends HttpError {
  statusCode = 401;
}

class NotFound extends HttpError {
  statusCode = 404;
}

class ValidationError extends HttpError {
  statusCode = 422;
  errors = [];

  constructor({ message, errors }) {
    super({ message });
    this.errors = errors || [];
  }
}

module.exports = {
  HttpError,
  BadRequest,
  AccessDenies,
  ValidationError,
  NotFound,
};
