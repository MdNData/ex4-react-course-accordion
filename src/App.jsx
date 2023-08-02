import { useEffect, useState } from "react";
import questions from "./data";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const App = () => {
  const [data, setData] = useState(questions);

  const [display, setDisplay] = useState(
    data.map((question) => {
      return { id: question.id, display: false };
    })
  );

  const displayHideInfo = (id) => {
    setDisplay(
      display.map((question) => {
        if (question.id == id) {
          return { id: question.id, display: !question.display };
        }
        return { id: question.id, display: question.display };
      })
    );
  };

  return (
    <main>
      <section className="container">
        <h1>Questions</h1>
        {data.map((question, key) => {
          return (
            <article className="question" key={key} id={question.id}>
              <header>
                <h5>{question.title}</h5>
                {display[key].display ? (
                  <AiFillMinusCircle
                    onClick={() => {
                      displayHideInfo(question.id);
                    }}
                    className="question-btn"
                  />
                ) : (
                  <AiFillPlusCircle
                    onClick={() => {
                      displayHideInfo(question.id);
                    }}
                    className="question-btn"
                  />
                )}
              </header>
              {display[key].display ? <p>{question.info}</p> : ""}
            </article>
          );
        })}
      </section>
    </main>
  );
};
export default App;
