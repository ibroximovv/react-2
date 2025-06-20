import { SVGProps } from "react";
const CursorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={58}
    height={59}
    viewBox="0 0 58 59"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1_541)" filter="url(#filter0_d_1_541)">
      <rect x={4} y={0.830078} width={50} height={50} rx={19} fill="#02897A" />
      <path
        d="M33.1161 27.4283L23.9732 18.2854C23.8661 18.1694 23.7232 18.1158 23.5714 18.1158C23.5 18.1158 23.4196 18.1336 23.3571 18.1604C23.1429 18.2497 23 18.4551 23 18.6872V32.1158C23 32.3479 23.1429 32.5533 23.3571 32.6426C23.4196 32.6694 23.5 32.6872 23.5714 32.6872C23.7232 32.6872 23.8661 32.6247 23.9732 32.5176L26.7589 29.7319L28.4643 33.7676C28.5893 34.0533 28.9196 34.1961 29.2143 34.0711L30.7946 33.4015C31.0804 33.2765 31.2232 32.9461 31.0982 32.6515L29.3036 28.4015H32.7143C32.9464 28.4015 33.1518 28.2586 33.2411 28.0444C33.3304 27.839 33.2857 27.589 33.1161 27.4283Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_541"
        x={0}
        y={0.830078}
        width={59}
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
          result="effect1_dropShadow_1_541"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1_541"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1_541">
        <rect
          width={51}
          height={50}
          fill="white"
          transform="translate(4 0.830078)"
        />
      </clipPath>
    </defs>
  </svg>
);
export default CursorIcon;
