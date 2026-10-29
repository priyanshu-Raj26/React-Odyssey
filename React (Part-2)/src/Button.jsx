function handleClick() {
  console.log("Hello :)");
}

function handleMouseOver() {
  console.log("Bye Bye...");
}

function handleDblClick() {
  console.log("You double click");
}

export default function Button() {
  let printName = (name) => {
    console.log(`Hello, ${name}`);
  };
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <button
        onClick={() => {
          //   printName("Priyanshu Raj");  //You wrap it in an arrow function so it only runs on click, not immediately.
          printName("React Developer");
        }}
      >
        Greet
      </button>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae enim
        consectetur vero obcaecati facere et cum asperiores odit, atque fugit
        autem aliquam iure similique ab eveniet ullam rerum natus aut.
      </p>
      <button onDoubleClick={handleDblClick}>Double Click me!</button>
    </div>
  );
}
