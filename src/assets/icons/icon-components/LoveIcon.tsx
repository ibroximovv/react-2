import { SVGProps } from "react";
const LoveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={58}
    height={59}
    viewBox="0 0 58 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_557)" filter="url(#filter0_d_1_557)">
      <rect x={4} y={0.830078} width={50} height={50} rx={19} fill="#740A76" />
      <path
        d="M29 33.9729C29.1429 33.9729 29.2857 33.9194 29.3929 33.8122L34.9554 28.4551C35.0357 28.3747 37 26.5801 37 24.4372C37 21.8211 35.4018 20.2586 32.7321 20.2586C31.1696 20.2586 29.7054 21.4908 29 22.1872C28.2946 21.4908 26.8304 20.2586 25.2679 20.2586C22.5982 20.2586 21 21.8211 21 24.4372C21 26.5801 22.9643 28.3747 23.0357 28.4372L28.6071 33.8122C28.7143 33.9194 28.8571 33.9729 29 33.9729Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_557"
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
          result="effect1_dropShadow_1_557"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_557"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1_557">
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
export default LoveIcon;
