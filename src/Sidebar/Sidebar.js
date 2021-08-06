import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className="Sidebar-Container">
      <div className="mt-4 mx-3">
        <p className="text-muted fw-normal m-0">SELECTED</p>
        <h3 className="fw-bold">Design Team</h3>
      </div>
      <hr style={{ marginTop: "60px" }} />
      <p className="mx-3 mt-5 fw-bold fs-5 ms-5">Projects</p>
      <div className="container box-parent">
        <div className="row row1">
          <div className="col-6 ms-5 d-flex flex-column box">
            <p className="text-muted m-0">Total</p>
            <p className="fw-bold num">148</p>
          </div>
          <div className="col-6  d-flex flex-column box">
            <p className="text-muted m-0">Completed</p>
            <p className="fw-bold num">56</p>
          </div>
        </div>
        <div className="row row2">
          <div className="col-6 ms-5 d-flex flex-column box">
            <p className="text-muted m-0">Progress</p>
            <p className="fw-bold num">76</p>
          </div>
          <div className="col-6  d-flex flex-column box">
            <p className="text-muted m-0">Waiting</p>
            <p className="fw-bold num">16</p>
          </div>
        </div>
      </div>
      <div className="m-2 px-2">
        <span className="text-muted fw-bold mb-1">Time Log : 74%</span>
        <div className="progress mt-2">
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            aria-valuenow="74"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "74%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
