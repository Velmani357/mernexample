
import React from "react";

function PropsExample() {
  const colours = ["black", "red", "blue", "brown"]; 

  return (
    <div>
      <h2>Fav Colours</h2>
      <ul>
        {colours.map((colour) => (
          <li>{colour}</li>
        ))}
      </ul>
    </div>
  );
}

export default PropsExample;



