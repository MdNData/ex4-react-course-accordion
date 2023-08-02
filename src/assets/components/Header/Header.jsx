import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export const Header = ({display, setDisplay, title}) => {
  return (
    <header>
      <h5>{title}</h5>
      {display ? (
        <AiFillMinusCircle
          onClick={() => {
            setDisplay(!display);
          }}
          className="question-btn"
        />
      ) : (
        <AiFillPlusCircle
          onClick={() => {
            setDisplay(!display);
          }}
          className="question-btn"
        />
      )}
    </header>
  );
};
