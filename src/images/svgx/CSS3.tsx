import { FC, SVGProps } from "react";

export const CSS3: FC<SVGProps<SVGSVGElement>> = (props) => {
  const { width = 40, height = 45, ...others } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <path
        d="M3.60964 40.5016L0 0H39.6771L36.0627 40.4952L19.8145 45L3.60964 40.5016Z"
        fill="#1572B6"
      />
      <path
        d="M19.8386 41.5576L32.969 37.9174L36.0579 3.31238H19.8386V41.5576Z"
        fill="#33A9DC"
      />
      <path
        d="M19.8386 17.9856H26.4118L26.8651 12.899H19.8386V7.93127H19.8563H32.294L32.1751 9.2636L30.9552 22.9532H19.8386V17.9856Z"
        fill="white"
      />
      <path
        d="M19.8691 30.8861L19.8466 30.8925L14.3148 29.3979L13.9612 25.4363H11.2725H8.97424L9.67014 33.2357L19.845 36.0611L19.8691 36.0547V30.8861Z"
        fill="#EBEBEB"
      />
      <path
        d="M25.9891 22.7427L25.3913 29.3946L19.8514 30.8893V36.0579L30.0343 33.2357L30.1098 32.3968L30.9729 22.7427H25.9891Z"
        fill="white"
      />
      <path
        d="M19.8562 7.93127V11.017V12.8861V12.899H7.87336H7.85729L7.75765 11.782L7.53104 9.2636L7.41211 7.93127H19.8562Z"
        fill="#EBEBEB"
      />
      <path
        d="M19.8386 17.9856V21.0713V22.9404V22.9533H14.392H14.3759L14.2763 21.8363L14.0513 19.3179L13.9324 17.9856H19.8386Z"
        fill="#EBEBEB"
      />
    </svg>
  );
};
