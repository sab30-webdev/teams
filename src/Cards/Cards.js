import { useState, useEffect } from "react";
import { db } from "../firebase";
import Card from "./Card";
import "./Cards.css";

const Cards = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    db.collection("profiles")
      .get()
      .then((snapshot) => {
        let list = [];
        snapshot.forEach((doc) => {
          list.push(doc.data());
        });
        setProfiles(list);
      });
  }, [refresh]);

  function addData(data) {
    db.collection("profiles").add(data);
    setRefresh(!refresh);
  }

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
        {profiles
          .filter((val) =>
            val.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((p, idx) => (
            <Card
              name={p.name}
              email={p.email}
              pos={p.des}
              img={p.url}
              key={idx}
            />
          ))}
        <Card addData={addData} />
      </div>
    </div>
  );
};

export default Cards;
