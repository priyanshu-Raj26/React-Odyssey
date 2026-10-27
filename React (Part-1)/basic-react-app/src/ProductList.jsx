import Product from "./Product";
import Activity from "./Activity1";

function ProductList() {
  let options = ["Hi-tech", "Durable", "Fast"];
  // let options = [<li>Hi-tech</li>, <li>Durable</li>, <li>Fast</li>];

  return (
    <>
      <Activity userName={"priyanshu Raj"} textColor={"red"} />
      <Activity userName={"Abhinav chaudary"} textColor={"yellow"} />
      <Product
        title="Phone"
        price={25000}
        // features={options}
        // features={["Hi-tech", "durable", "Fast"]}
        // features2={{ a: "Hi-tech", b: "durable", c: "Fast" }}
      />
      <Product title="Laptop" price={40000} />
      <Product title="Pen" price={20} />
    </>
  );
}

export default ProductList;
