import React from "react";

function CurrencyIcon({size}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      enableBackground="new 0 0 512 512"
      viewBox="0 0 512 512"
    >
      <g xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="256"
          cy="256"
          r="256"
          fill="#ffe14d"
          data-original="#ffe14d"
        ></circle>
        <path
          fill="#fb3"
          d="M512 256C512 114.841 397.159 0 256 0v512c141.159 0 256-114.841 256-256z"
          data-original="#ffbb33"
        ></path>
        <path
          fill="#fb3"
          d="M256 451c-107.52 0-195-87.48-195-195S148.48 61 256 61s195 87.48 195 195-87.48 195-195 195z"
          data-original="#ffbb33"
        ></path>
        <path
          fill="#e68a2e"
          d="M451 256c0-107.52-87.48-195-195-195v390c107.52 0 195-87.48 195-195z"
          data-original="#e68a2e"
        ></path>
        <path
          fill="#ffe14d"
          d="M271 242.068v-59.306c17.252 4.233 30 15.333 30 28.092 0 8.291 6.709 15 15 15s15-6.709 15-15c0-28.982-25.801-53.214-60-58.786v-16.214c0-8.291-6.709-15-15-15s-15 6.709-15 15v16.214c-34.199 5.572-60 29.804-60 58.786s25.801 53.214 60 58.786v59.306c-17.252-4.233-30-15.333-30-28.092 0-8.291-6.709-15-15-15s-15 6.709-15 15c0 28.982 25.801 53.214 60 58.786V376c0 8.291 6.709 15 15 15s15-6.709 15-15v-16.36c34.199-5.572 60-29.804 60-58.786s-25.801-53.215-60-58.786zm-60-31.214c0-12.759 12.748-23.859 30-28.092v56.184c-17.252-4.234-30-15.334-30-28.092zm60 118.092v-56.184c17.252 4.233 30 15.333 30 28.092s-12.748 23.858-30 28.092z"
          data-original="#ffe14d"
        ></path>
        <path
          fill="#fb3"
          d="M271 376v-16.36c34.199-5.572 60-29.804 60-58.786s-25.801-53.214-60-58.786v-59.306c17.252 4.233 30 15.333 30 28.092 0 8.291 6.709 15 15 15s15-6.709 15-15c0-28.982-25.801-53.214-60-58.786v-16.214c0-8.291-6.709-15-15-15V391c8.291 0 15-6.709 15-15zm0-103.239c17.252 4.233 30 15.333 30 28.092s-12.748 23.859-30 28.092z"
          data-original="#ffbb33"
        ></path>
      </g>
    </svg>
  );
}

export default CurrencyIcon;
