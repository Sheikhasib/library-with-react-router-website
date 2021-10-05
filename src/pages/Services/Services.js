import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./libraryData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <div className="row">
        <div className="service-container">
          {books.map((book) => (
            <Service key={book.id} book={book}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
