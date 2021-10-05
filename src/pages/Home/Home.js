import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import HomeData from "../HomeData/HomeData";
import "./Home.css";

const Home = () => {
  const [demos, setDemo] = useState([]);
  useEffect(() => {
    fetch("./FakeData.json")
      .then((res) => res.json())
      .then((data) => setDemo(data));
  }, []);
  console.log(demos);

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <div className="logo">
            <p className=" description">
              I have always imagined that Paradise will be a kind of a
              Library.Nothing is pleasanter than exploring a library.The only
              thing that you absolutely have to know, is the location of the
              library.When in doubt go to the library.
            </p>
            <div>
              <Button variant="info">Visit Our Library</Button>{" "}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="data-container">
            {demos.map((demo) => (
              <HomeData key={demo.id} demo={demo}></HomeData>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
