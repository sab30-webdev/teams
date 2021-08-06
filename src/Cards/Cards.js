import { useState } from "react";
import Card from "./Card";
import cardsData from "../cardsData";
import "./Cards.css";

const Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto m-5">
      <h2 className="ms-3" style={{ display: "inline" }}>
        People
      </h2>
      <div className="search-div">
        <p
          className="ms-3 my-0 all-tab"
          style={{ position: "relative", top: "16px", cursor: "pointer" }}
        >
          All
        </p>
        <input
          className="form-control float-end w-25"
          type="search"
          placeholder="Search by name"
          aria-label="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr className="mt-0" />
      <div className="row">
        {cardsData.profiles
          .filter((val) =>
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((p) => (
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
