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
          <label htmlFor="num1">1</label>
          <input
            type="radio"
            id='num1'
            name="1"
            value={1}
            onChange={HandleRate}
            checked={Selected === 1}
          />
        </li>
        <li>
          <label htmlFor="num2">2</label>
          <input
            type="radio"
            name="2"
            id="num2"
            value={2}
            checked={Selected === 2}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="num3">3</label>
          <input
            type="radio"
            name="3"
            id='num3'
            checked={Selected === 3}
            value={3}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="num4">4</label>
          <input
            type="radio"
            name="4"
            id='num4'
            checked={Selected === 4}
            value={4}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="num5">5</label>
          <input
            type="radio"
            id="num5"
            name="5"
            checked={Selected === 5}
            value={5}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="num6">6</label>
          <input
            type="radio"
            name="6"
            id='num6'
            checked={Selected === 6}
            value={6}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="num7">7</label>
          <input
            type="radio"
            id='num7'
            name="7"
            checked={Selected === 7}
            value={7}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="num8">8</label>
          <input
            type="radio"
            id='num8'
            name="8"
            checked={Selected === 8}
            value={8}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="num9">9</label>
          <input
            type="radio"
            name="9"
            id='num9'
            checked={Selected === 9}
            value={9}
            onChange={HandleRate}
          />
        </li>
        <li>
          <label htmlFor="num10">10</label>
          <input
            type="radio"
            id='num10'
            name="10"
            checked={Selected === 10}
            value={10}
            onChange={HandleRate}
          />
        </li>
      </ul>
      {
        console.log(Selected)
      }
    </div>
  );
};

export default Rating;
