import { useState } from "react";
import questions from "./data";
import { Questions } from "./assets/components/Questions/Questions";

const App = () => {
  const [data, setData] = useState(questions);

  return (
    <main>
      <Questions data={data} setData={setData} />
    </main>
  );
};
export default App;
