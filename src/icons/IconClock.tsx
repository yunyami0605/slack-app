import {SVGProps} from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

function IconClock(props: Props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
          fill="#C8C9CB"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V12.1487L15.4801 14.4238C15.7983 14.689 15.8413 15.1619 15.5762 15.4801C15.311 15.7983 14.8381 15.8413 14.5199 15.5762L11.5199 13.0762C11.3489 12.9337 11.25 12.7226 11.25 12.5V6C11.25 5.58579 11.5858 5.25 12 5.25Z"
          fill="#C8C9CB"
        />
      </g>
    </svg>
  );
}

export {IconClock};
