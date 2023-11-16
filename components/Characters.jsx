import React from "react";

const Characters = ({ characters = [] }) => {
  return (
    <div className="row border">
      {characters.map((item, index) => (
        <div key={index} className="col">
          <div className="card border-0" style={{minWidth : "200px"}}>
            <img src={item.image} alt="" className="rounded-5 mt-2"/>
          </div>
          <div className="card-body">
            <h5 className="card-title mt-3">{item.name}</h5>
            <hr />
            <p>Species: {item.species}</p>
            <p>Location: {item.location.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
