import {SVGProps} from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

function IconUpperArrow(props: Props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.24239 15.6137C6.56558 15.9383 7.08958 15.9383 7.41277 15.6137L12 11.0066L16.5872 15.6137C16.9104 15.9383 17.4344 15.9383 17.7576 15.6137C18.0808 15.2891 18.0808 14.7628 17.7576 14.4382L12.5852 9.24344C12.262 8.91885 11.738 8.91885 11.4148 9.24344L6.24239 14.4382C5.9192 14.7628 5.9192 15.2891 6.24239 15.6137Z"
        fill="#9A9B9F"
      />
    </svg>
  );
}

export {IconUpperArrow};
