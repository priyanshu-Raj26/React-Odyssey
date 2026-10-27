import "./Item.css";
import Price from "./Price";

function Item({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let descriptions = [
    ["8000 DPI", "5 Programmble Buttons"],
    ["Intitive Touch Surface", "Designed for iPad Pro"],
    ["Desgined for iPad Pro", "Intitive Touch Surface"],
    ["Wireless Mouse 2.4GHz", "Optical Orientation"],
  ];
  return (
    <div className="Item">
      <h3>{title}</h3>

      <p>{descriptions[idx][0]}</p>
      <p>{descriptions[idx][1]}</p>

      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}

export default Item;
