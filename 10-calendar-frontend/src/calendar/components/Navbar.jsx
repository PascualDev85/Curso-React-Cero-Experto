export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4 box-shadow box-s">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt"></i>
        &nbsp; David
      </span>
      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span>&nbsp;Salir</span>
      </button>
    </div>
  );
};
