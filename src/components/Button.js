const addStyles = {
  width: "100px",
  height: "100px",
  borderRadius: "50px",
  margin: "20px",
  transition: "all 0.6s ease-in-out",
  boxShadow:
    "0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%)",
};
export default function Button({ color, click }) {
  return (
    <button
      onClick={() => click(color)}
      className="btn btn-lg"
      style={{ backgroundColor: color, ...addStyles }}
    ></button>
  );
}
