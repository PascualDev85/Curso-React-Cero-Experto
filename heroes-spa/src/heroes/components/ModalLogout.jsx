import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../auth/context";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const ModalLogout = (props) => {
  const { user, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogout = () => {
    logoutUser();
    navigate("/login", { replace: true });
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <p>Are you sure you want to logout?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onLogout} className="btn btn-danger">
          Yes
        </Button>
        <Button onClick={props.onHide}>No</Button>
      </Modal.Footer>
    </Modal>
  );
};
