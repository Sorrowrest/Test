import React, { useEffect, useState } from "react";
import style from "./changeWindow.module.scss";
import { ChangeWindowProps } from "../../../interfaces/ChangeWindowProps";
import clsx from "clsx";

export const ChangeWindow: React.FC<ChangeWindowProps> = ({
  elementParams,
  closeChangeWindow,
  changeSomethingEl,
}) => {
  const [currentValue, setValue] = useState<string>("");
  const [animBlock, setAnim] = useState<string>("");
  const [countAnims, setCount] = useState<number>(0);

  useEffect(() => {
    setValue(elementParams!.innerText);
  }, [elementParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClose = () => {
    if (countAnims !== 0) {
      setAnim(style.animBlock);
    }
  };

  const handleCount = () => {
    setCount(countAnims + 1);
  };

  const handleApply = () => {
    if (countAnims !== 0) {
      setAnim(style.animBlock);
      if (elementParams) {
        changeSomethingEl({
          id: elementParams?.id,
          tagName: elementParams.tagName,
          innerText: currentValue,
        });
      }
    }
  };

  useEffect(() => {
    if (countAnims === 2) {
      setCount(0);
      closeChangeWindow();
    }
  }, [countAnims]);

  return (
    <div
      onAnimationEnd={handleCount}
      className={clsx(style.whitePlace, animBlock)}
    >
      <div className={style.box}>
        <h2 className={style.text}>~ Changing window ~</h2>
        <h2 className={style.text}>ID: {elementParams!.id}</h2>

        <h2 className={style.text_another}>
          Change Text:{" "}
          <input 
            onChange={handleChange}
            value={currentValue}
            className={style.currentValueInput}
          ></input>{" "}
        </h2>
        <div className={style.buttons_place}>
          <div onClick={handleClose} className={style.button}>
            Cancel
          </div>
          <div onClick={handleApply} className={style.button}>
            Apply
          </div>
        </div>
      </div>
    </div>
  );
};
