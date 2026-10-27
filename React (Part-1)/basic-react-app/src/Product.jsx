import "./Product.css";

function Product({ title, price = 10, features }) {
  let isDiscount = price > 30000;
  // const list = features.map((feature) => <li>{feature}</li>);
  let styles = { backgroundColor: isDiscount ? "pink" : "" }; //Dynamic component styling

  return (
    <div className="Product" style={styles}>
      <h2>{title}</h2>
      <h5>Price : {price}</h5>
      {isDiscount && <p>Discount: 5%</p>}
      {/* {price > 30000 ? <p>Discount: 5%</p> : null} */}
      {/* <p>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </p> */}
      {/* <p>{features2 && `${features2.a}, ${features2.b}`}</p> */}
    </div>
  );
}

export default Product;
