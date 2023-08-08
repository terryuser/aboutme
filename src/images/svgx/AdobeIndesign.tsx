import { FC, SVGProps } from "react";

export const AdobeIndesign: FC<SVGProps<SVGSVGElement>> = (props) => {
  const { width = 45, height = 45, ...others } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...others}
    >
      <path
        d="M0 16.2857C0 10.5852 0 7.7349 1.10939 5.5576C2.08525 3.64238 3.64238 2.08525 5.5576 1.10939C7.7349 0 10.5852 0 16.2857 0H28.7143C34.4149 0 37.2651 0 39.4423 1.10939C41.3576 2.08525 42.9147 3.64238 43.8906 5.5576C45 7.7349 45 10.5852 45 16.2857V28.7143C45 34.4149 45 37.2651 43.8906 39.4423C42.9147 41.3576 41.3576 42.9147 39.4423 43.8906C37.2651 45 34.4149 45 28.7143 45H16.2857C10.5852 45 7.7349 45 5.5576 43.8906C3.64238 42.9147 2.08525 41.3576 1.10939 39.4423C0 37.2651 0 34.4149 0 28.7143V16.2857Z"
        fill="#6F2B41"
      />
      <path
        d="M13.6075 9.84424H7.61133V36.2708H13.6075V9.84424Z"
        fill="#FF70BD"
      />
      <path
        d="M25.5733 36.7038C28.0461 36.7038 30.3518 35.6044 31.5695 33.4506H31.6548L31.9286 36.2709L37.2209 36.2745C37.1392 34.9794 37.0618 32.7066 37.0618 30.545V8.43457H31.1029V18.8236H31.0255C30.1633 17.4912 28.3198 16.6655 25.9697 16.6655C21.3805 16.6655 17.3388 20.3925 17.379 26.8588C17.379 32.8177 21.0242 36.7038 25.5733 36.7038ZM27.5314 21.2182C29.3749 21.2182 30.6664 22.5506 31.0219 24.1532C31.0549 24.475 31.0993 24.9007 31.0993 25.2189V27.7282C31.0993 28.2428 31.0549 28.6686 30.9438 29.1015C30.5847 30.7858 29.215 31.9627 27.4906 31.9627C25.0222 31.9627 23.4117 29.9236 23.4117 26.6703C23.4117 23.65 24.8258 21.2182 27.5307 21.2182H27.5314Z"
        fill="#FF70BD"
      />
    </svg>
  );
};