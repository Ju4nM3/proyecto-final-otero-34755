import React, { useState } from "react";

const Counter = () => {
  const [cartAmount, setcartAmount] = useState(0);
  function cartMod(operacion) {
    if (operacion === "+") {
      setcartAmount(cartAmount + 1);
    } else if (operacion === "-" && cartAmount > 1) {
      setcartAmount(cartAmount - 1);
    }
  }
 
  return (
    <>
      <button className="mx-2" onClick={() => cartMod("+")}>
        +
      </button>
      <p className="mx-2">{cartAmount}</p>
      <button className="mx-2" onClick={() => cartMod("-")}>
        -
      </button>
    </>
  );
};

export default Counter;
