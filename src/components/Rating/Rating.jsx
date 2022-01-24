import React, { useState } from "react";

const Rating = ({ select }) => {
  const [Selected, setSelected] = useState("");
  const HandleRate = (e) => {
    select(e.target.value);
  };

  return (
    <div>
      <ul className="rating">
        <li>
          <label htmlFor="1">1</label>
          <input
            type="radio"
            name="1"
            value={1}
            checked={Selected === 1}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="2">2</label>
          <input
            type="radio"
            name="2"
            value={2}
            checked={Selected === 2}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="3">3</label>
          <input
            type="radio"
            name="3"
            checked={Selected === 3}
            value={3}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="4">4</label>
          <input
            type="radio"
            name="4"
            checked={Selected === 4}
            value={4}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="5">5</label>
          <input
            type="radio"
            name="5"
            checked={Selected === 5}
            value={5}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="6">6</label>
          <input
            type="radio"
            name="6"
            checked={Selected === 6}
            value={6}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="7">7</label>
          <input
            type="radio"
            name="7"
            checked={Selected === 7}
            value={7}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="8">8</label>
          <input
            type="radio"
            name="8"
            checked={Selected === 8}
            value={8}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="9">9</label>
          <input
            type="radio"
            name="9"
            checked={Selected === 9}
            value={9}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="10">10</label>
          <input
            type="radio"
            name="10"
            checked={Selected === 10}
            value={10}
            onChange={HandleRate}
          />
        </li>
      </ul>
    </div>
  );
};

export default Rating;
