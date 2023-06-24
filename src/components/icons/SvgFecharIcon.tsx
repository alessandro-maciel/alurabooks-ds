import * as React from 'react';

const SvgFecharIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="url(#fechar-icon_svg__a)"
      d="m19.333 2.547-1.88-1.88L10 8.12 2.547.667l-1.88 1.88L8.12 10 .667 17.454l1.88 1.88L10 11.88l7.453 7.454 1.88-1.88L11.88 10l7.453-7.453Z"
    />
    <defs>
      <linearGradient
        id="fechar-icon_svg__a"
        x1={8.466}
        x2={35.447}
        y1={-1.573}
        y2={2}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#002F52" />
        <stop offset={1} stopColor="#326589" />
      </linearGradient>
    </defs>
  </svg>
);
export default SvgFecharIcon;