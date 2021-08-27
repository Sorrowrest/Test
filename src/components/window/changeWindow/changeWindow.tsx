import React, { ReactElement, useEffect, useRef, useState } from "react";
import style from "./changeWindow.module.scss";
import { ElementParams } from "../../../interfaces/ElementParams";
import clsx from "clsx";

interface ChangeWindowProps {
  arrayElements: ReactElement[] | undefined;
  closeChangeWindow: () => void;
  changeAll: (newArray: ReactElement[]) => void;
}

export const ChangeWindow: React.FC<ChangeWindowProps> = ({
  arrayElements,
  closeChangeWindow,
  changeAll,
}) => {
  const [currentBlock, setBlock] = useState<ReactElement[] | undefined>([]);
  const [animBlock, setAnim] = useState<string>("");
  const [countAnims, setCount] = useState<number>(0);
  let [value, setValue] = useState<string[]>([]);
  

  useEffect(() => {
    setBlock(arrayElements!.map((el, i) => {
      
      return <h2 className={style.text_another}>
        Change Text:{" "}
        <input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(value.map(elem => {
            if (elem === value[i]) {
              return e.target.value;
            } else {
              return elem
            }
          }))}
          defaultValue={value[i]}
          value={value[i]}
          key={el.props.id}
          className={style.currentValueInput}
        ></input>{" "}
      </h2>
    }));
  }, [arrayElements]);

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
    }
    console.log(currentBlock);
    console.log(value)
  };

  useEffect(() => {
    arrayElements!.map((item) => console.log('ok'));
  }, []);

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
        {currentBlock}

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
