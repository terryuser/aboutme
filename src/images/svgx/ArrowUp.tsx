import { FC, SVGProps } from "react";

interface customProps extends SVGProps<SVGSVGElement> {}

export const ArrowUp: FC<customProps> = (props) => {
  const { width = 36, height = 10, fill = "#FCCB3E", ...others } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="31.68"
        height="2.64"
        transform="matrix(1 0 0 -1 2.16003 9.6001)"
        fill={fill}
      />
      <path
        d="M18 1.57361e-06L2.41155 5.76L33.5885 5.76L18 1.57361e-06Z"
        fill={fill}
      />
    </svg>
  );
};
