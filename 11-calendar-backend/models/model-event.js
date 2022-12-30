const { Schema, model } = require("mongoose");

const EventoSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    // el usuario que crea el evento y viene en el token
    type: Schema.Types.ObjectId, // hace referencia al id del usuario
    ref: "Usuario",
    required: true,
  },
});

// sobreescribir el método toJSON para que no devuelva la versión y el id con guión bajo. No hace modificaciones en la base de datos

EventoSchema.method("toJSON", function () {
  // this.toObject() es un método de mongoose
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Evento", EventoSchema);
