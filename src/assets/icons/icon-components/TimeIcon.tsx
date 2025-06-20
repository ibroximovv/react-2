import { SVGProps } from "react";
const TimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={58}
    height={59}
    viewBox="0 0 58 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_565)" filter="url(#filter0_d_1_565)">
      <rect x={4} y={0.830078} width={50} height={50} rx={19} fill="#F03E3D" />
      <path
        d="M34.5714 20.2586H35.4286C35.5893 20.2586 35.7143 20.1336 35.7143 19.9729V19.4015C35.7143 19.2408 35.5893 19.1158 35.4286 19.1158H22.2857C22.125 19.1158 22 19.2408 22 19.4015V19.9729C22 20.1336 22.125 20.2586 22.2857 20.2586H23.1429C23.1429 23.5622 24.7232 25.9551 26.4732 27.1158C24.7232 28.2765 23.1429 30.6694 23.1429 33.9729H22.2857C22.125 33.9729 22 34.0979 22 34.2586V34.8301C22 34.9908 22.125 35.1158 22.2857 35.1158H35.4286C35.5893 35.1158 35.7143 34.9908 35.7143 34.8301V34.2586C35.7143 34.0979 35.5893 33.9729 35.4286 33.9729H34.5714C34.5714 30.6694 32.9911 28.2765 31.2411 27.1158C32.9911 25.9551 34.5714 23.5622 34.5714 20.2586ZM33.4286 20.2586C33.4286 21.5622 33.1339 22.714 32.6696 23.6872H25.0446C24.5804 22.714 24.2857 21.5622 24.2857 20.2586H33.4286ZM32.9196 31.1158H24.7946C25.4554 29.3926 26.6429 28.1694 27.8304 27.6872H29.8839C31.0714 28.1694 32.2589 29.3926 32.9196 31.1158Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_565"
        x={0}
        y={0.830078}
        width={58}
        height={58}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1_565"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_565"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1_565">
        <rect
          width={50}
          height={50}
          fill="white"
          transform="translate(4 0.830078)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default TimeIcon;
