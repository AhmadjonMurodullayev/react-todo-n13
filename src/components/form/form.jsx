import React, { useEffect } from "react";
import { Card } from "../card";

export const Form = ({ setData }) => {
  const [inputValue, setInputValue] = React.useState("");
  const [javohir, setJavohir] = React.useState([]);
  const [time, setTime] = React.useState(""); 
  const [date, setDate] = React.useState(""); 

  const submit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      return; 
    }
    const newItem = { userName: inputValue, id: Date.now() };

    setData((prevState) => [...prevState, newItem]); 
    setJavohir((prevState) => [...prevState, newItem]); 

    setInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const day = String(now.getDate()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0"); 
      const year = now.getFullYear();

      setTime(timeString);
      setDate(`${day}.${month}.${year}`); 
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-green-700 h-[100vh] flex items-center justify-center">
      <div className="w-[40%] h-[90vh] bg-black rounded-3xl flex flex-col justify-between p-5">
        <h1 className="text-white text-center text-4xl my-4">Todo List</h1>
        
        <div className="flex items-center justify-between">
          <div className="text-white text-center text-sm top-5">
            <div>{`Date: ${date}`}</div>
          </div>
          <div className="text-white text-center text-sm">
            {`Time: ${time}`}
          </div>
        </div>

        <div className="flex flex-col overflow-auto mb-5 max-h-[50vh] space-y-2">
          {javohir.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-400 text-2xl font-bold">Add Todo</p>
            </div>
          ) : (
            javohir.map((item) => (
              <Card
                key={item.id}
                setData={setJavohir}
                id={item.id}
                name={item.userName}
              />
            ))
          )}
        </div>

        <div className="flex justify-center">
          <form onSubmit={submit} className="w-full flex justify-center items-center">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              name="userName"
              type="text"
              value={inputValue}
              placeholder="Add a new todo..."
              className="w-[70%] p-2 rounded-md outline-none bg-inherit text-white border-2 border-gray-400"
            />
            <button
              className="text-white bg-blue-600 p-2 px-5 rounded-md ml-2"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
