import React from 'react';
import { Svg, G, Path } from '@react-pdf/renderer';

type IconProps = {
  size?: number;        // PDF points
  color?: string;
  strokeWidth?: number;
};

const ExternalLinkIcon: React.FC<IconProps> = ({
  size = 24,
  color = '#000',
  strokeWidth = 2,
}) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <G
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {/* window/frame */}
      <Path d="M11 5h-6v14h14v-6" />
      {/* arrow shaft */}
      <Path d="M13 11l7 -7" />
      {/* arrow head (two short segments) */}
      <Path d="M21 3h-6M21 3v6" />
    </G>
  </Svg>
);

export default ExternalLinkIcon;