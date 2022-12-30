const { response } = require("express");
const Evento = require("../models/model-event");

const getEventos = async (req, res = response) => {
  const eventos = await Evento.find().populate("user", "name");
  // populate() es un método de mongoose para rellnar los datos del usuario (documentación en https://mongoosejs.com/docs/populate.html)

  res.json({
    ok: true,
    eventos,
  });
};

const crearEvento = async (req, res = response) => {
  // verificar que tenga el evento
  //   console.log(req.body);

  const evento = new Evento(req.body);

  try {
    // el req.uid viene del middleware validarJWT
    // el evento.user viene del modelo Evento (models/model-event.js)
    evento.user = req.uid;
    // guardar el evento en la base de datos
    const eventoGuardado = await evento.save();

    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }

  //   res.json({
  //     ok: true,
  //     msg: "crear eventos",
  //   });
};

const actualizarEvento = async (req, res = response) => {
  // el id viene de la url
  const eventoId = req.params.id;
  const uid = req.uid;

  try {
    //   verificar si el evento existe
    const evento = await Evento.findById(eventoId);

    //  si el evento no existe
    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe por ese id",
      });
    }

    // verificar si el usuario que quiere actualizar el evento es el mismo que lo creó
    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes privilegio para editar este evento",
      });
    }

    // si el evento existe, actualizarlo

    const nuevoEvento = {
      ...req.body,
      user: uid,
    };

    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventoId,
      nuevoEvento,
      { new: true }
      // new: true es para que devuelva el evento actualizado
    );

    res.json({
      ok: true,
      evento: eventoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

const borrarEvento = async (req, res = response) => {
  const eventoId = req.params.id;
  const uid = req.uid;

  try {
    const evento = await Evento.findById(eventoId);

    if (!evento) {
      return res.status(404).json({
        ok: false,
        msg: "Evento no existe por ese id",
      });
    }

    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: "No tienes privilegio para elimnar este evento",
      });
    }

    await Evento.findByIdAndDelete(eventoId);

    res.json({ ok: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  getEventos,
  crearEvento,
  actualizarEvento,
  borrarEvento,
};
