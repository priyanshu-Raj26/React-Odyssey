import Item from "./Item";

function ProductTab() {
  let styles = {
    display: "flex",
    flexwrap: "wrap",
    justifyContent: "center",
    alginItem: "center",
  };

  return (
    <div style={styles}>
      <Item title={"Logitech MX Master 3S"} idx={0} />

      <Item title={"Apple Pencil (2nd Gen)"} idx={1} />

      <Item title={"Zebronics Zeb-transformer"} idx={2} />

      <Item title={"Petronics Toad 23"} idx={3} />
    </div>
  );
}

export default ProductTab;
