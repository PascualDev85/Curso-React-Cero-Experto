const { response } = require("express");
const bcrypt = require("bcryptjs");
const Usuario = require("../models/model-user");
const { generarJWT } = require("../helpers/jwt");

const crearUsuario = async (req, res = response) => {
  //   console.log(req.body);

  const { email, password } = req.body;

  try {
    let usuario = await Usuario.findOne({ email });
    // console.log(usuario);

    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: "Un usuario ya existe",
      });
    }

    usuario = new Usuario(req.body);

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    // guardar usuario
    await usuario.save();

    // Validación manual, npm express-validator (automática)
    //   if (name.length < 5) {
    //     return res.status(400).json({
    //       ok: false,
    //       msg: "El nombre debe de ser de 5 letras",
    //     });
    //   }

    // Generar el JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
      //   msg: "registro",
      // name,
      // email,
      // password,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    // console.log(usuario);

    if (!usuario) {
      return res.status(400).json({
        ok: false,
        // nota a nivel de programación, no se debe dar pistas de que el usuario existe, por seguridad. Aunque en este caso, queremos saber si el usuario existe o no.
        msg: "Un usuario no existe con ese correo",
      });
    }

    // Confirmar los passwords
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Password incorrecto",
      });
    }

    // Generar el JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Por favor hable con el administrador",
    });
  }
};

const renewToken = async (req, res = response) => {
  // la req.uid viene del middleware validarJWT
  // const uid = req.uid;
  // const name = req.name;
  const { uid, name } = req;

  // Generar un nuevo JWT y retornarlo en esta petición
  // Porque el token expira en 2 horas, y si el usuario está activo, se debe renovar el token.
  const token = await generarJWT(uid, name);

  res.json({
    ok: true,
    // no es necesario enviar el uid y name, ya que se envía en el token
    // uid,
    // name,
    token,
  });
};

module.exports = {
  crearUsuario,
  loginUsuario,
  renewToken,
};
