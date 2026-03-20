"use client";
import { useState } from "react";

type CounterProps = {
  name: string;
};

const Counter = ({ name }: CounterProps) => {
  const [value, setValue] = useState<number>(0);

  const handleClick = (value: number) => {
    return setValue(value + 1);
  };

  return (
    <div>
      <button onClick={() => handleClick(value)}>
        Tryck här för att lägga till {name}{" "}
      </button>
      <p>{value}</p>
    </div>
  );
};

export default Counter;
