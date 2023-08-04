import { FC, SVGProps } from "react";

interface customProps extends SVGProps<SVGSVGElement> {}

export const MongoDB: FC<customProps> = (props) => {
  const { width = 21, height = 45, ...others } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <path
        d="M11.1132 45L9.90621 44.5998C9.90621 44.5998 10.0669 38.4927 7.8571 38.0636C6.41068 36.3793 8.07085 -33.8416 13.3584 37.8241C12.3551 38.333 11.5875 39.21 11.216 40.2718C11.0169 41.84 10.9825 43.4247 11.1132 45Z"
        fill="url(#paint0_linear_113_29)"
      />
      <path
        d="M11.7656 39.1002C14.9792 36.6811 17.4403 33.3996 18.8627 29.6371C20.2852 25.8747 20.6107 21.7858 19.8013 17.8457C17.4388 7.42338 11.8443 3.99695 11.2417 2.68874C10.7217 1.87413 10.2778 1.01335 9.91577 0.11731L10.361 29.1568C10.361 29.1568 9.43845 38.0314 11.7656 39.1002Z"
        fill="url(#paint1_linear_113_29)"
      />
      <path
        d="M9.29215 39.4859C9.29215 39.4859 -0.545169 32.7857 0.0237592 20.933C0.0768312 17.3598 0.896123 13.8395 2.4263 10.6101C3.95647 7.38059 6.16189 4.51711 8.89358 2.21304C9.21281 1.94183 9.46643 1.6018 9.6354 1.21851C9.80436 0.83521 9.88426 0.418609 9.86912 0C10.4814 1.31786 10.3818 19.6763 10.4461 21.8234C10.6952 30.1757 9.98162 37.9093 9.29215 39.4859Z"
        fill="url(#paint2_linear_113_29)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_113_29"
          x1="2.99975"
          y1="22.9055"
          x2="16.8721"
          y2="27.613"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.231" stop-color="#999875" />
          <stop offset="0.563" stop-color="#9B9977" />
          <stop offset="0.683" stop-color="#A09F7E" />
          <stop offset="0.768" stop-color="#A9A889" />
          <stop offset="0.837" stop-color="#B7B69A" />
          <stop offset="0.896" stop-color="#C9C7B0" />
          <stop offset="0.948" stop-color="#DEDDCB" />
          <stop offset="0.994" stop-color="#F8F6EB" />
          <stop offset="1" stop-color="#FBF9EF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_113_29"
          x1="8.08676"
          y1="-0.0901952"
          x2="14.2197"
          y2="38.2063"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#48A547" />
          <stop offset="1" stop-color="#3F9143" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_113_29"
          x1="-0.822446"
          y1="22.1063"
          x2="15.6357"
          y2="16.5945"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#41A247" />
          <stop offset="0.352" stop-color="#4BA74B" />
          <stop offset="0.956" stop-color="#67B554" />
          <stop offset="1" stop-color="#69B655" />
        </linearGradient>
      </defs>
    </svg>
  );
};
