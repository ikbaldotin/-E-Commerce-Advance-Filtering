const Buttons = ({ onclickHandler, value, title }) => {
  return (
    <button onClick={onclickHandler} value={value}>
      {" "}
      {title}{" "}
    </button>
  );
};

export default Buttons;
