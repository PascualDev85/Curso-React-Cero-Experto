import { useEffect, useMemo, useState } from "react";
import { addHours, differenceInSeconds } from "date-fns";

import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

import Modal from "react-modal";
import DatePicker, { registerLocale } from "react-datepicker";
import es from "date-fns/locale/es";

import "react-datepicker/dist/react-datepicker.css";
import "./styles/calendarModal.css";
import { useCalendarStore, useUiStore } from "../../hooks";

registerLocale("es", es);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const CalendarModal = () => {
  // importaciones de los customs hooks
  const { isDateModalOpen, closeDateModal } = useUiStore();
  const { activeEvent, startSavingEvent } = useCalendarStore();

  //* Al configurar el store, se puede usar el hook useUiStore para obtener el estado de la app
  // const [isOpen, setIsOpen] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // formValues es el estado del formulario
  const [formValues, setFormValues] = useState({
    title: "David",
    notes: "Comprar la tarta",
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  // controlamos los valores del formulario y si hay errores
  const titleClass = useMemo(() => {
    return formSubmitted && formValues.title.trim().length < 2
      ? "form-control is-invalid"
      : "form-control";
  }, [formValues.title, formSubmitted]);

  // controlar las notas cuando se activa en el formulario
  useEffect(() => {
    if (activeEvent !== null) {
      // paso las propiedades y creo un nuevo objeto
      setFormValues({ ...activeEvent });
    }
  }, [activeEvent]);

  const errorMessage = "Titulo es obligatorio";

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const onDateChanged = (event, changing = "start") => {
    setFormValues({
      ...formValues,
      [changing]: event,
    });
  };

  // const onCloseModal = () => {
  //   // console.log("close modal");
  //   // setIsOpen(false);
  //   closeDateModal();
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    // poestar el form
    setFormSubmitted(true);

    const difference = differenceInSeconds(formValues.end, formValues.start);
    // console.log(difference);

    // si no es un numero o es menor o igual a 0
    if (isNaN(difference) || difference <= 0) {
      Swal.fire("Fechas Incorrectas", "Revisar las fechas ingresadas", "error");
      return;
    }

    if (formValues.title.trim().length < 2) {
      return errorMessage;
    }

    console.log(formValues);

    //TODO:
    // hacer el dispatch para guardar el evento
    await startSavingEvent(formValues);
    // cerrar modal
    closeDateModal();
    // resetear el formulario
    setFormSubmitted(false);
  };

  return (
    <Modal
      isOpen={isDateModalOpen}
      onRequestClose={closeDateModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form onSubmit={onSubmit} className="container">
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label>
          <DatePicker
            minDate={formValues.end}
            selected={formValues.start}
            onChange={(event) => onDateChanged(event, "start")}
            className="form-control"
            showTimeSelect
            dateFormat="Pp"
            locale={"es"}
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label>
          <DatePicker
            minDate={formValues.start}
            selected={formValues.end}
            onChange={(event) => onDateChanged(event, "end")}
            className="form-control"
            showTimeSelect
            dateFormat="Pp"
            locale={"es"}
            timeCaption="Hora"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className={titleClass}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChange}
          />
          <small className="form-text danger">{errorMessage}</small>
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
