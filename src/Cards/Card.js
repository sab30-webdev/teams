import "./Card.css";

const Card = ({ name, email, pos, img }) => {
  return (
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
  );
};

export default Card;
