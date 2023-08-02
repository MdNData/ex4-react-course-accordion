import { Question } from "../Question/Questions";

export const Questions = ({ data, setData }) => {
  return (
    <section className="container">
      <h1>Questions</h1>
      {data.map((question, key) => {
        return <Question question={question} key={key} />;
      })}
    </section>
  );
};
