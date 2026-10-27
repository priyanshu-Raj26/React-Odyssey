export default function Activity({ userName, textColor }) {
  // let styles = { color: textColor };
  return (
    <div style={{ color: textColor }}>
      <h3>Hello, {userName}</h3>
    </div>
  );
}
