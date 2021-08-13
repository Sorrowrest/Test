import React from "react";
import { ToolBarProps } from "../../interfaces/ToolBarProps";
import style from './toolBar.module.scss';

export const ToolBar: React.FC<ToolBarProps> = ({showChangingScreen, deleteElement}) => {
    return <div  className={style.bar}>
        <div onClick={showChangingScreen} className={style.settings}></div>
        <div onClick={deleteElement} className={style.trash}></div>
    </div>
}