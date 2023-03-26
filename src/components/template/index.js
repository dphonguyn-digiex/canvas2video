import React from "react";
import { Circle, Rect } from "react-konva";

function Template({ currentTime, timeDisplay = 5, id = 1 }) {
  return renderTemplate(id);
}

const renderTemplate = id => {
  switch (id) {
    case 1:
      return (
        <Rect
          x={20}
          y={50}
          width={100}
          height={100}
          fill="red"
          shadowBlur={10}
        />
      );
    case 2:
      return <Circle x={200} y={100} radius={50} fill="green" />;
    default:
      break;
  }
};

export default Template;
