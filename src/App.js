import "./styles.css";
import React, { useState, useEffect } from "react";
var vd = require("./data.json");

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);

  function rateCalculator(value, key) {
    console.log(value, key);
    let d = [...data];
    d[key]["price"] = value;
    d[key]["total"] = parseInt(value) * d[key]["qty"];
    let tt = 0;
    for (let dt of d) {
      tt += dt.total;
    }
    setTotal(tt);
    setData(d);
  }

  useEffect(() => {
    let temp = [];
    for (let dt of vd) {
      temp.push({ ...dt, price: 0, total: 0 });
    }
    setData(temp);
  }, [setData]);

  if (loading) return "Loading...";
  if (error) return "Error!";

  console.log(data);

  return (
    <table>
      <thead>
        <tr>
          <th>Name of Material</th>
          <th>UOM</th>
          <th>Price</th>
          <th>Qty</th>
          <th>total</th>
        </tr>
      </thead>
      <tbody>
        {data.map((users, key) => (
          <tr key={key}>
            <td>{users.name}</td>
            <td>{users.uom}</td>
            <td>
              <input
                onChange={(e) => {
                  rateCalculator(e.target.value, key);
                }}
              ></input>
            </td>
            <td>{users.qty}</td>
            <td>{users.total}</td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Total</td>
          <td>{total}</td>
        </tr>
      </tbody>
    </table>
  );
}
