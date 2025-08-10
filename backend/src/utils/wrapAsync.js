/**
 * Wraps async functions to automatically catch errors and pass them to next()
 * @param {Function} fn - Async function to wrap
 * @returns {Function} - Wrapped function that handles errors
 */
const wrapAsync = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default wrapAsync;
