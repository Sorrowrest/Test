import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { WindowProps } from "../../interfaces/WindowProps";
import { ElementParams } from "../../interfaces/ElementParams";
import { ElementCreated } from "../../interfaces/ElementCreated";
import { ChangeWindow } from "./changeWindow";
import style from "./window.module.scss";

export const Window: React.FC<WindowProps> = ({ isElement }) => {
  const [arrayElements, setElements] = useState<ReactElement[]>([]);
  const [elementKeyprop, setKey] = useState<number>();
  const [isShow, setShow] = useState<boolean>(false);
  const [elementParams, setElParams] = useState<ElementParams | undefined>();

  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  };

  const closeChangeWindow = () => {
    setShow(false);
  };

  const changeSomethingEl = (newElement: ElementParams) => {
    let Timedarray = arrayElements;

    arrayElements.map((el: ReactElement, index: number) => {
      const newEl = React.createElement(
        newElement.tagName,
        {
          key: newElement.id,
          onClick: showChangingScreen,
          id: newElement.id,
        },
        newElement.innerText
      );
      if (el.props.id === newElement.id) {
        let arr = Timedarray.map((item) =>
          item === Timedarray[index] ? newEl : item
        );
        setElements(arr);
      }
      return true;
    });
  };

  const showChangingScreen = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target !== null) {
      setElParams({
        id: parseInt(event.target.id),
        innerText: event.target.innerText,
        tagName: event.target.localName,
      });
      setShow(true);
    }
  };
  useEffect(() => {
    if (isElement) {
      if (isElement.tagName !== "img") {
        const newElement = React.createElement(
          isElement.tagName,
          {
            key: getRandomInt(0, 9999),
            onClick: showChangingScreen,
            id: getRandomInt(0, 9999),
          },
          isElement.info
        );
        setElements((prevState) => [...prevState, newElement]);
      } else {
        const newElement = React.createElement(isElement.tagName, {
          key: getRandomInt(0, 9999),
          src: isElement.info,
          id: getRandomInt(0, 9999),
        });
        setElements((prevState) => [...prevState, newElement]);
      }
    }
  }, [isElement]);

  return (
    <div className={style.window}>
      {isShow && (
        <ChangeWindow
          changeSomethingEl={changeSomethingEl}
          closeChangeWindow={closeChangeWindow}
          elementParams={elementParams}
        />
      )}
      {arrayElements}
    </div>
  );
};
