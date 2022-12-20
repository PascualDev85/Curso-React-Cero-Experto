// hacer un custom hook para obtener el estilo de los eventos

export const useEventStyleCalendar = (event, start, end, isSelected) => {
  //   console.log(event, start, end, isSelected);

  const style = {
    backgroundColor: "#367CF7",
    borderRadius: "0px",
    opacity: 0.9,
    display: "block",
    color: "white",
  };

  return {
    style,
  };
};
