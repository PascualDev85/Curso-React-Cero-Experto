import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";

export const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  // console.log(logoutUser);

  const navigate = useNavigate();

  const onLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
      <Link
        className="navbar-brand text-danger fs-3 animate__animated animate__heartBeat"
        to="/"
      >
        Partnerships
      </Link>
      <div className="navbar-collapse">
        <div className="navbar-nav mx-5">
          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/dc"
          >
            DC
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              `nav-item nav-link ${isActive ? "active" : ""}`
            }
            to="/search"
          >
            Search
          </NavLink>
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span
            className="nav-item nav-link text-danger mx-5"
            // bg-white rounded-circle"
          >
            {user?.name}
          </span>
          <button
            onClick={onLogout}
            className="nav-item nav-link btn btn-outline-danger"
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};
