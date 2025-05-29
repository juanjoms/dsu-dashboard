"use client";
import { useState } from "react";

export const ExampleClient = () => {
  const [name, setSetName] = useState("Click Me");
  return (
    <div className="text-center text-lg font-semibold bg-blue-950 p-4 rounded-lg shadow-md">
      <h2>Client Component {name}</h2>
      <button
        onClick={() => {
          setSetName((prev) => (prev === "Click Me" ? "Clicked!" : "Click Me"));
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {name}
      </button>
      <br />
    </div>
  );
};
