import React from "react";
import style from './toolBar.module.scss';

interface ToolBarProps {
    isShowBar: boolean;
    showChangingScreen: () => void;
}

export const ToolBar: React.FC<ToolBarProps> = ({showChangingScreen}) => {
    return <div  className={style.bar}>
        <button onClick={showChangingScreen} className={style.settings}></button>
    </div>
}