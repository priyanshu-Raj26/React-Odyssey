export default function Parent() {
  return (
    <div onClick={() => console.log("Parent clicked")}>
      <button
        onClick={(e) => {
          e.stopPropagation(); // prevents "Parent clicked" from also firing
          console.log("Button clicked");
        }}
      >
        Click me
      </button>
    </div>
  );
}
