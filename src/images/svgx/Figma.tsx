import { FC, SVGProps } from "react";

export const Figma: FC<SVGProps<SVGSVGElement>> = (props) => {
  const { width = 30, height = 45, ...others } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <path
        d="M22.5 30C26.6421 30 30 26.6421 30 22.5C30 18.3579 26.6421 15 22.5 15C18.3579 15 15 18.3579 15 22.5C15 26.6421 18.3579 30 22.5 30Z"
        fill="#19BCFE"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 45C11.6421 45 15 41.6421 15 37.5C15 36.3693 15 33.8693 15 30C11.6307 30 9.1307 30 7.5 30C3.35786 30 0 33.3579 0 37.5C0 41.6421 3.35786 45 7.5 45Z"
        fill="#09CF83"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 30C8.88071 30 11.3807 30 15 30V15C11.3807 15 8.88071 15 7.5 15C3.35786 15 0 18.3579 0 22.5C0 26.6421 3.35786 30 7.5 30Z"
        fill="#A259FF"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.5 15C8.88071 15 11.3807 15 15 15V0C11.3807 0 8.88071 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15Z"
        fill="#F24E1E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.5 15H15V0H22.5C26.6421 0 30 3.35786 30 7.5C30 11.6421 26.6421 15 22.5 15Z"
        fill="#FF7262"
      />
    </svg>
  );
};
