import React from "react";
import { Form } from "./components/form";
// import { Card } from "./components/card/card";

function App() {
  const [javohir, setJavohir] = React.useState([]);
  console.log(javohir);

  return (
    <div>
      <Form setData={setJavohir} />
      {/* {javohir.map((item, index) => {
        return (
          <Card
            key={item.id}
            setData={setJavohir}
            id={item.id}
            name={item.userName}
          />
        );
      })} */}
    </div>
  );
}

export default App;
