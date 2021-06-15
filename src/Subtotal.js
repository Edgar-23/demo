import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import reducer, { getBasketTotal } from "./reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={value => (
          <>
            <p>
              subtotal ({basket.length} items):<strong>{value}</strong>
            </p>
            <small classsName="subtotal__gift">
              <input type="checkbox" /> This contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default Subtotal;
