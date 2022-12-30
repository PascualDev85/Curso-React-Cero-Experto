/*
    Rutas de Eventos /Events
    host + /api/events
*/

const { Router } = require("express");
const { check } = require("express-validator");

const { isDate } = require("../helpers/isDate");
const { validarCampos } = require("../middlewares/file-validator");
const { validarJWT } = require("../middlewares/validate-jwt");
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  borrarEvento,
} = require("../controllers/events");

const router = Router();

// Tienen que pasar la validación del JWT
router.use(validarJWT);
// cualquier petición que se haga a esta ruta, va a pasar por el middleware de validarJWT. Así se evita repetir el código en cada petición

// obtener eventos
router.get("/", getEventos);

// crear un nuevo evento
router.post(
  "/",
  [
    check("title", "El título es obligatorio").not().isEmpty(),
    check("start", "La fecha de inicio es obligatoria").custom(isDate),
    // custom es un método de express-validator
    check("end", "La fecha de fin es obligatoria").custom(isDate),
    validarCampos,
  ],
  crearEvento
);

// actualizar evento
router.put("/:id", actualizarEvento);

// borrar evento
router.delete("/:id", borrarEvento);

module.exports = router;
