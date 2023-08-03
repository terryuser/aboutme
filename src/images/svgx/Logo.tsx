import { FC, SVGProps } from "react";

const Logo: FC<SVGProps<any>> = (props) => {
  const { fill = "#FFF", width = 25, height = 25 } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 107 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 53.4762C0 33.8572 17.381 17.4286 40.8095 13V93.9524V105.429C44.619 106.333 48.5714 106.857 52.619 106.952V95.1429V11.8095V0C48.5714 0.047619 44.5714 0.571434 40.8095 1.52382C17.381 7.19048 0 28.2857 0 53.4762Z"
        fill={fill}
      />
      <path
        d="M70.3809 93.0476V13.9048V2.66667C66.619 1.42858 62.6666 0.571428 58.5714 0.190475V11.9524V94.9048V106.667C62.6666 106.286 66.619 105.429 70.3809 104.19C91.6666 97.1429 107 77.0476 107 53.4286C107 71.9048 91.6666 87.5238 70.3809 93.0476Z"
        fill={fill}
      />
    </svg>
  );
};

export { Logo };
