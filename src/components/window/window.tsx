import React, { ReactElement, useEffect, useState } from "react";
import { ElementParams } from "../../interfaces/ElementParams";
import ChangeWindow from "./changeWindow/index";
import style from "./window.module.scss";
import ToolBar from "../toolBar/index";
import { ElementCreated } from "../../interfaces/ElementCreated";

interface WindowProps {
  isElement: ElementCreated | undefined;
}

export const Window: React.FC<WindowProps> = ({ isElement }) => {
  const [arrayElements, setElements] = useState<ReactElement[]>([]);
  const [isShowBar, setBar] = useState<boolean>(false);
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
    arrayElements.map((el: ReactElement, index: number) => {
      let newEl: ReactElement;
      if (newElement.tagName !== "img") {
        newEl = React.createElement(
          newElement.tagName,
          {
            key: newElement.id,
            onClick: showToolBar,
            id: newElement.id,
          },
          newElement.innerText
       
        );
      } else {
        newEl = React.createElement(newElement.tagName, {
          key: newElement.id,
          onClick: showToolBar,
          id: newElement.id,
          src: newElement.innerText,
        });
      }
      if (el.props.id === newElement.id) {
        const arr = arrayElements.map((item) =>
          item === arrayElements[index] ? newEl : item
        );
        setElements(arr);
      }
      return true;
    });
  };

  const showChangingScreen = () => {
    if (elementParams) {
      setShow(true);
    }
  };

  const deleteElement = () => {
    if (elementParams) {
      setElements(
        arrayElements.filter((el) => el.props.id !== elementParams!.id)
      );
      setElParams(undefined);
    }

  };

  const showToolBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target !== null) {
      setElParams({
        id: parseInt(event.target.id),
        innerText: event.target.innerText,
        tagName: event.target.localName,
      });
      setBar(true);
    }
  };
  useEffect(() => {
    if (isElement) {
      if (isElement.tagName !== "img") {
        const newElement = React.createElement(
          isElement.tagName,
          {
            key: getRandomInt(0, 9999),
            onClick: showToolBar,
            id: getRandomInt(0, 9999),
          },
          isElement.info
        );
        setElements((prevState) => [...prevState, newElement]);
      } else {
        const newElement = React.createElement(isElement.tagName, {
          key: getRandomInt(0, 9999),
          src: isElement.info,
          onClick: showToolBar,
          id: getRandomInt(0, 9999),
        });
        setElements((prevState) => [...prevState, newElement]);
      }
    }
  }, [isElement]);

  return (
    <div className={style.window}>
      {isShowBar && (
        <ToolBar
          isShowBar={isShowBar}
          showChangingScreen={showChangingScreen}
          deleteElement={deleteElement}
        />
      )}
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
