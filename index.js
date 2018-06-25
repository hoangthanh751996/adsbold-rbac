const rbac = require('./source/rbac');

module.exports.isPermision = (perm) => {
  return rbac.isPermision(perm);
};
