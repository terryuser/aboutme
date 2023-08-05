import { FC, CSSProperties } from "react";

interface ButtonPropsType {
  content: string;
  className?: string;
  btnColor?: string;
  contentColor?: string;
  onClick?: () => void;
}

export const Button: FC<ButtonPropsType> = (props) => {
  const {
    content,
    className,
    btnColor = "var(--main-color)",
    contentColor = "var(--main-text-color)",
    onClick,
  } = props;

  const styleProps: CSSProperties = {
    background: btnColor,
    color: contentColor,
  };

  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <button
      className={`px-3 py-2 drop-shadow-md text-sm hover:opacity-80 ${className}`}
      style={styleProps}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};
