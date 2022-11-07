import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">
          useContext
        </Link>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink
              //   className={(args) => {
              //     // console.log(args);
              //     // return "nav-link";
              //   }}
              //   className={({ isActive }) => {
              //     `nav-link ${isActive ? "active" : ""}`;
              //   }}
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
};
