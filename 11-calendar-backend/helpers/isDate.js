const moment = require("moment");

const isDate = (value) => {
  // viene de express-validator  (documentacion en https://express-validator.github.io/docs/custom-validators-sanitizers.html)

  //   console.log(value);
  //   console.log(req, location, path);

  if (!value) {
    return false;
  }

  const fecha = moment(value);
  if (fecha.isValid()) {
    // isValid() es un método de moment
    return true;
  } else {
    return false;
  }
};

module.exports = { isDate };
