/*
    Rutas de usuarios /Auth
    host + /api/auth
*/

const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/file-validator");

const {
  crearUsuario,
  loginUsuario,
  renewToken,
} = require("../controllers/auth");

const { validarJWT } = require("../middlewares/validate-jwt");

router.post(
  "/new",
  [
    // Colección de middlewares
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password debe de ser de 6 caracteres").isLength({
      min: 6,
    }),
    validarCampos,
  ],
  crearUsuario
);

router.post(
  "/",
  check("email", "El email es obligatorio").isEmail(),
  check("password", "El password debe de ser de 6 caracteres").isLength({
    min: 6,
  }),
  validarCampos,
  loginUsuario
);

// si sólo se pasa el middleware, se puede hacer así:
router.get("/renew", validarJWT, renewToken);

module.exports = router;
