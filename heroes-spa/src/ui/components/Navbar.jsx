import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/context";
import { ModalLogout } from "../../heroes/components/ModalLogout";

export const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const [modalShow, setModalShow] = useState(false);

  // console.log(logoutUser);

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-3">
        <Link
          className="navbar-brand text-danger fs-3 animate__animated animate__heartBeat partnerships"
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
        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end contentUser">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-danger mx-3">
              {user?.name}
            </span>
            <button
              // onClick={onLogout}
              onClick={() => setModalShow(true)}
              className="nav-item nav-link btn btn-outline-danger"
            >
              Logout
            </button>
          </ul>
        </div>
      </nav>
      <ModalLogout show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};
