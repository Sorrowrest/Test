import React from "react";
import style from './toolBar.module.scss';

interface ToolBarProps {
    isShowBar: boolean;
    showChangingScreen: () => void;
    deleteElement: () => void;
}

export const ToolBar: React.FC<ToolBarProps> = ({showChangingScreen, deleteElement}) => {
    return <div  className={style.bar}>
        <div onClick={showChangingScreen} className={style.settings}></div>
        <div onClick={deleteElement} className={style.trash}></div>
    </div>
}