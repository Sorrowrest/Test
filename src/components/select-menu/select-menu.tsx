import React from "react";
import style from "./select-menu.module.scss";

interface SelectorProps {
  chooseElement: (element: React.MouseEvent<HTMLElement>) => void;
}

export const SelectMenu: React.FC<SelectorProps> = ({ chooseElement }) => {
const tagNames: string[] = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "img", ]

  return (
    <>
      <div className={style.selectMenu}>
        <div className={style.box}>
          <p className={style.text}>- Добавить элемент -</p>
        </div>
        <div className={style.container}>
          {tagNames.map(el => <button key={el} onClick={chooseElement}>{el}</button>)}
        </div>
      </div>
    </>
  );
};
