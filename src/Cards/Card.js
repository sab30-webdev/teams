import { useState } from "react";
import ProfileDetails from "../Modal/Modal";
import { Button } from "react-bootstrap";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import "./Card.css";

const Card = ({ name, email, pos, img, addData }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return name ? (
    <div className="col-sm-4 ">
      <div className="card m-2 mx-auto">
        <img
          className="card-img-top image--cover mx-auto"
          alt="profile"
          src={img}
        />
        <div className="card-block">
          <h4 className="card-title text-center">{name}</h4>
          <p className="card-text text-center">
            <small className="text-muted">{email}</small>
          </p>
          <hr />
          <p className="card-text pos text-center p-1 fw-bold">{pos}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="col-sm-4 center-plus">
      <OverlayTrigger
        placement="top"
        overlay={<Tooltip id="tooltip-right">Add Profile</Tooltip>}
      >
        <Button variant="primary" className="+" onClick={handleShow}>
          +
        </Button>
      </OverlayTrigger>
      <ProfileDetails show={show} close={handleClose} addData={addData} />
    </div>
  );
};

export default Card;
