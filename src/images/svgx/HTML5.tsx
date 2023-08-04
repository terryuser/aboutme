import { FC, SVGProps } from "react";

export const HTML5: FC<SVGProps<SVGSVGElement>> = (props) => {
  const { width = 43, height = 50, ...others } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 43 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <path
        d="M3.57143 44.6429L0 0H42.8571L39.2857 44.6429L21.4286 50L3.57143 44.6429Z"
        fill="#E44D26"
      />
      <path
        d="M39.2857 3.57141H21.4286V47.3214L35.7143 42.8571L39.2857 3.57141Z"
        fill="#F16529"
      />
      <path
        d="M9.82148 25.8929L8.03577 8.92859H35.7143L34.8215 14.2857H13.3929L14.2858 20.5357H33.9286L32.1429 37.5L21.4286 41.0714L10.7143 37.5L9.82148 28.5714H15.1786L16.0715 33.0357L21.4286 34.8214L26.7858 33.0357L27.6786 25.8929H9.82148Z"
        fill="white"
      />
    </svg>
  );
};
