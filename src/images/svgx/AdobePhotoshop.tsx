import { FC, SVGProps } from "react";

export const AdobePhotoshop: FC<SVGProps<SVGSVGElement>> = (props) => {
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
        fill="#001E36"
      />
      <path
        d="M9.64282 32.9725V13.1841C9.64282 13.0496 9.69907 12.9726 9.83033 12.9726C11.7679 12.9726 13.7047 12.8572 15.6428 12.8572C18.7878 12.8572 22.193 13.9325 23.3866 17.2225C23.6679 18.0302 23.8178 18.8571 23.8178 19.7226C23.8178 21.3765 23.4429 22.7417 22.6928 23.8187C20.5978 26.8269 16.9666 26.7802 13.7116 26.7802V32.9534C13.737 33.1361 13.5813 33.2226 13.4304 33.2226H9.86782C9.71783 33.2226 9.64282 33.1456 9.64282 32.9725ZM13.7303 16.6841V23.1456C15.021 23.2401 16.3714 23.2504 17.6115 22.838C18.9806 22.443 19.7304 21.258 19.7304 19.838C19.7683 18.6279 19.1091 17.4669 17.9866 17.0303C16.7615 16.5208 15.0528 16.4903 13.7303 16.6841Z"
        fill="#31A8FF"
      />
      <path
        d="M35.5126 21.8691C34.9453 21.57 34.341 21.3513 33.7163 21.2189C32.9137 21.03 29.7479 20.3685 29.7466 22.0239C29.7748 22.948 31.2417 23.4007 31.8899 23.6648C34.1655 24.446 36.7404 25.8424 36.6898 28.6496C36.7594 32.1442 33.3735 33.5413 30.4711 33.5416C28.9603 33.5572 27.3862 33.3232 26.0034 32.6746C25.8713 32.6047 25.7865 32.4554 25.7921 32.303V28.9592C25.7771 28.8251 25.9211 28.708 26.0336 28.8044C27.3885 29.6237 28.9943 30.0217 30.5618 30.0429C31.2536 30.0429 32.6249 29.9759 32.6146 28.9592C32.6146 27.9836 30.9742 27.5351 30.3202 27.2873C29.3723 26.949 28.4736 26.4802 27.6487 25.894C26.4957 25.0717 25.7725 23.7532 25.7921 22.3026C25.7853 19.0121 28.9021 17.5351 31.7089 17.5345C33.021 17.5236 34.4302 17.6208 35.6516 18.1537C35.8273 18.2053 35.8636 18.3904 35.8629 18.5561V21.6833C35.874 21.8775 35.6585 21.9435 35.5126 21.8691Z"
        fill="#31A8FF"
      />
    </svg>
  );
};
