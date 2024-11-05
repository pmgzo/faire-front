import { IconProps, iconSizeMap } from "./types";

export default function RemoveIcon({ color, size }: IconProps) {
  const iconSize = iconSizeMap.get(size || "lg");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={iconSize}
      viewBox="0 -960 960 960"
      width={iconSize}
      fill={color || "#FFFFFF"}
    >
      <path d="M200-440v-80h560v80H200Z" />
    </svg>
  );
}
