import React from "react";
import style from "./select-menu.module.scss";
import { Selector } from "../selector";
import { SelectorProps } from "../../interfaces/SelectorProps";

export const SelectMenu: React.FC<SelectorProps> = ({ chooseElement }) => {
  return (
    <>
      <div className={style.selectMenu}>
        <div className={style.box}>
          <p className={style.text}>- Добавить элемент -</p>
        </div>
        <Selector chooseElement={chooseElement}></Selector>
      </div>
    </>
  );
};
