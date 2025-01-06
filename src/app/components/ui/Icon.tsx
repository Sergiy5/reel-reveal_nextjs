import React from "react";

interface IconProps {
  id: string;
  width: number;
  height: number;
  styles?: string;
}

export const Icon: React.FC<IconProps> = ({
  id,
  width = "24px",
  height = "24px",
  styles,
}) => {
  return (
    <svg width={width} height={height} className={`${styles}`}>
      <use xlinkHref={`/icons/sprite.svg#${id}`} />
    </svg>
  );
};
