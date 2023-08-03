import { FC, SVGProps } from "react";

interface customProps extends SVGProps<SVGSVGElement> {}

export const ArrowDown: FC<customProps> = (props) => {
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
        transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 33.8401 0)"
        fill={fill}
      />
      <path d="M18 9.6001L33.5885 3.8401H2.41154L18 9.6001Z" fill={fill} />
    </svg>
  );
};
