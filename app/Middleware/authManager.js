
module.exports = () => {
  // return a middleware
  return async (req, res, next) => {
    const user = auth.current.user;
    // role is allowed, so continue on the next middleware
    if (user.manager===true)){
      next();
    }
  };
};
