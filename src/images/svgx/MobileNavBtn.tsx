import { FC, SVGProps } from "react";

export const MobileNavBtn: FC<SVGProps<SVGSVGElement>> = (props) => {
  const { width = 30, height = 22, fill = "#D9D9D9", ...others } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <rect width="30" height="4" fill="#D9D9D9" />
      <rect y="9" width="30" height="4" fill="#D9D9D9" />
      <rect y="18" width="30" height="4" fill="#D9D9D9" />
    </svg>
  );
};
