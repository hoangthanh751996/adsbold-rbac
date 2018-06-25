
module.exports.isPermision = (perm) => {
  function unauthorized (msg) {
    return {
      success: false,
      code: 401,
      reason: msg || 'Unauthorized'
    };
  }

  return function (req, res, next) {
    const payload = {...req.payload};
    if (!payload.perms) {
      return res.json(unauthorized());
    } else if (payload.perms.includes(perm)) {
      next();
    } else {
      return res.json(unauthorized('You have not permission'));
    }
  };
};
