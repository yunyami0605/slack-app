import {SVGProps} from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

function IconPlus(props: Props) {
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
          d="M11.1529 3.84706C11.1529 3.37924 11.5322 3 12 3C12.4678 3 12.8471 3.37924 12.8471 3.84706V20.1529C12.8471 20.6208 12.4678 21 12 21C11.5322 21 11.1529 20.6208 11.1529 20.1529V3.84706Z"
          fill="#7A7E80"
        />
        <path
          d="M20.1529 11.1529C20.6208 11.1529 21 11.5322 21 12C21 12.4678 20.6208 12.8471 20.1529 12.8471H3.84706C3.37924 12.8471 3 12.4678 3 12C3 11.5322 3.37924 11.1529 3.84706 11.1529H20.1529Z"
          fill="#7A7E80"
        />
      </g>
    </svg>
  );
}

export {IconPlus};
