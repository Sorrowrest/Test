import React, { useEffect, useRef, useState } from "react";
import style from "./input-place.module.scss";

interface InputProps {
  stateElement: string;
  createElement: (tagName: string, info: string) => void;
}

export const InputPlace: React.FC<InputProps> = ({
  stateElement,
  createElement,
}) => {
  const inputRef = useRef(null);
  const [placeholder, setHolder] = useState<string>("Выберите элемент");
  const [inputValue, setValue] = useState<string>("");

  useEffect(() => {
    if (stateElement[0] === "h") {
      setHolder(`Введите текст для h${stateElement[1]}`);
    } else if (stateElement === "p") {
      setHolder(`Введите текст для p`);
    } else if (stateElement === "img") {
      setHolder(`Введите URL картинки`);
    }
    console.log(placeholder);
  }, [stateElement, placeholder]);

  const handleClick = () => {
    if (inputValue && stateElement) {
      createElement(stateElement, inputValue);
      setValue("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className={style.box}>
        <input
          value={inputValue}
          ref={inputRef}
          onChange={handleChange}
          className={style.input}
          placeholder={placeholder}
        ></input>
        <button onClick={handleClick} className={style.plus}>
          <span className={style.circle}>{" "}
          +{" "}</span>
        </button>
      </div>
    </>
  );
};
