import Card from "./Card";
import cardsData from "../cardsData";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="container mx-auto  m-5">
      <h2 className="ms-3">People</h2>
      <p className="ms-3 my-0 all-tab">All</p>
      <hr className="mt-0" />
      <div className="row">
        {cardsData.profiles.map((p) => (
          <Card
            name={p.name}
            email={p.email}
            pos={p.pos}
            img={p.img}
            key={p.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
