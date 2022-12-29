import { useSelector, useDispatch } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../store/ui/uiSlice";

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isDateModalOpen } = useSelector((state) => state.ui);

  // controlo el modal (abrir y cerrar)
  const openDateModal = () => dispatch(onOpenDateModal());
  const closeDateModal = () => dispatch(onCloseDateModal());

  return {
    //* Propiedades
    isDateModalOpen,
    hasEventOpen: !!isDateModalOpen,

    //* Metodos
    openDateModal,
    closeDateModal,
  };
};
