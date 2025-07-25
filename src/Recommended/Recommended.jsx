import Buttons from "../components/Buttons";
import "./Recommended.css";
const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h1 className="recommended-title"> Recommended</h1>
        <div className="recommended-flex">
          <Buttons onclickHandler={handleClick} value="" title="All Product" />
          <Buttons onclickHandler={handleClick} value="Nike" title="Nike" />
          <Buttons onclickHandler={handleClick} value="Adidas" title="Adidas" />
          <Buttons onclickHandler={handleClick} value="Puma" title="Puma" />
          <Buttons onclickHandler={handleClick} value="Vans" title="Vans" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
