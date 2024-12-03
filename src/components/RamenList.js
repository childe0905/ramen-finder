import React from "react";

const RamenList = ({ ramenShops }) => (
  <div className="ramen-list">
    <h2>拉麵店清單</h2>
    <ul>
      {ramenShops.map((shop, index) => (
        <li key={index}>
          <h3>{shop.name}</h3>
          <p>{shop.address}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default RamenList;