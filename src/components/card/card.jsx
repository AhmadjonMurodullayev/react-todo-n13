import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaSave,FaStar  } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

export const Card = ({ name, setData, id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const deleteItem = () => {
    setData((prevState) => prevState.filter((item) => item.id !== id));
  };

  const saveItem = () => {
    if (editedName.trim() !== "") {
      setData((prevState) =>
        prevState.map((item) =>
          item.id === id ? { ...item, userName: editedName } : item
        )
      );
      setIsEditing(false);
    }
  };

  return (
    <div className="border-2 h-16 rounded-2xl flex items-center px-4 mb-2 bg-gray-800">
      <div className="w-full flex justify-between items-center">
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
            className="flex-1 p-2  bg-inherit text-red-600 border-none "
          />
        ) : (
          <h1 className="text-white text-lg">{name}</h1>
        )}

        <div className="flex space-x-2">
          {isEditing ? (
            <button
              onClick={saveItem}
              className="bg-green-500 p-1 px-3 rounded-md text-white flex items-center"
            >
              <FaSave className="mr-1" /> Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 p-1 px-3 rounded-md text-white flex items-center"
            >
              <FaEdit className="mr-1" /> Edit
            </button>
          )}
          <button
            onClick={deleteItem}
            className="bg-red-500 p-1 px-3 rounded-md text-white"
          >
            <AiFillDelete />

          </button>
          <button>
            <FaStar/>
          </button>
        </div>
      </div>
    </div>
  );
};
