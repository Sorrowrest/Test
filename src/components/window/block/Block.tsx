import style from "./Block.module.css";

interface BlockProps {
  info: string;
}

export const Block: React.FC<BlockProps> = ({ info }) => {
  return (
    <div className={style.box}>
      <h2>{info}</h2>
    </div>
  );
};
