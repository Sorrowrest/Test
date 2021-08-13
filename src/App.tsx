import React, { useState } from "react";
import "./App.scss";
import { InputPlace } from "./components/input-place";
import { SelectMenu } from "./components/select-menu";
import { Window } from "./components/window";
import { ElementCreated } from "./interfaces/ElementCreated";

function App() {
  const [stateElement, setElement] = useState<string>("");
  const [isElement, setNewElement] = useState<ElementCreated | undefined>();

  const chooseElement = (event: React.MouseEvent<HTMLElement>) => {
    setElement(event.currentTarget.innerText);
  };

  const createElement = (tagName: string, info: string) => {
    setNewElement({ tagName: tagName, info: info });
  };

  return (
    <main>
      <div className="choosingBox">
        <SelectMenu chooseElement={chooseElement}></SelectMenu>
        <InputPlace stateElement={stateElement} createElement={createElement} />
      </div>
      <Window isElement={isElement}></Window>
    </main>
  );
}

export default App;
