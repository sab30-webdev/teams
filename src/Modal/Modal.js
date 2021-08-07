import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ProfileDetails = ({ show, close, addData }) => {
  const [profile, setProfile] = useState({});

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    addData(profile);
    setProfile({});
  };

  return (
    <>
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Name"
                name="name"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Designation"
                name="des"
                onChange={onChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="PhotoUrl"
                name="url"
                onChange={onChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              close();
              onSubmit();
            }}
          >
            Submit
          </Button>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileDetails;
