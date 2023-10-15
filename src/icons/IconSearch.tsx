import {SVGProps} from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

function IconSearch(props: Props) {
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
          d="M10.5 2.75C6.21979 2.75 2.75 6.21979 2.75 10.5C2.75 14.7802 6.21979 18.25 10.5 18.25C14.7802 18.25 18.25 14.7802 18.25 10.5C18.25 6.21979 14.7802 2.75 10.5 2.75ZM1.25 10.5C1.25 5.39137 5.39137 1.25 10.5 1.25C15.6086 1.25 19.75 5.39137 19.75 10.5C19.75 15.6086 15.6086 19.75 10.5 19.75C5.39137 19.75 1.25 15.6086 1.25 10.5Z"
          fill="#555555"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9697 15.9697C16.2626 15.6768 16.7374 15.6768 17.0303 15.9697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9697 17.0303C15.6768 16.7374 15.6768 16.2626 15.9697 15.9697Z"
          fill="#555555"
        />
      </g>
    </svg>
  );
}

export {IconSearch};
