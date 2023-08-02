import { useState } from "react";
import { Header } from "../Header/Header";

export const Question = ({ question }) => {
  const [display, setDisplay] = useState(false);

  return (
    <article className="question" id={question.id}>
      <Header display={display} setDisplay={setDisplay} title={question.title} />
      {display ? <p>{question.info}</p> : ""}
    </article>
  );
};
