const jwt = require("jsonwebtoken");

const generarJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    // payload: información que se va a guardar en el token como uid del usuario
    const payload = { uid, name };
    console.log(payload);

    // create a token
    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: "2h",
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token");
        } else {
          resolve(token);
        }
      }
    );
  });
};

module.exports = {
  generarJWT,
};
