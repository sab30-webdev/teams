import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ProfileDetails = ({ show, close, addData }) => {
  const [profile, setProfile] = useState(null);

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  function isEmptyObj(object) {
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  const sendData = (e) => {
    if (isEmptyObj(profile) || Object.keys(profile).length !== 4) {
      return;
    } else {
      e.preventDefault();
      addData(profile);
      setProfile({});
      close();
    }
  };

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add Profile</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                onChange={onChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={onChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                className="text-uppercase"
                type="text"
                placeholder="Designation"
                name="des"
                onChange={onChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="PhotoUrl"
                name="url"
                onChange={onChange}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              variant="primary"
              onClick={(e) => {
                sendData(e);
              }}
            >
              Submit
            </Button>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ProfileDetails;
