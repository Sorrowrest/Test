import React from "react";
import style from "./selector.module.scss";

import { SelectorProps } from "../../interfaces/SelectorProps";

export const Selector: React.FC<SelectorProps> = ({ chooseElement }) => {
  return (
    <div className={style.container}>
      <button onClick={chooseElement}>h1</button>
      <button onClick={chooseElement}>h2</button>
      <button onClick={chooseElement}>h3</button>
      <button onClick={chooseElement}>h4</button>
      <button onClick={chooseElement}>h5</button>
      <button onClick={chooseElement}>h6</button>
      <button onClick={chooseElement}>p</button>
      <button onClick={chooseElement}>img</button>
    </div>
  );
};
