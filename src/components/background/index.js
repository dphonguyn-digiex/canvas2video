import React, { useState } from "react";
import { Stage, Layer } from "react-konva";
import Template from "../template/index.js";
import "./index.css";

function CanvasBackground() {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Template timeDisplay={5000} id={1} />
        <Template timeDisplay={10000} id={2} />
      </Layer>
    </Stage>
  );
}

export default CanvasBackground;
