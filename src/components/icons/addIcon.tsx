import { IconProps, iconSizeMap } from "./types";

export default function AddIcon({ color, size }: IconProps) {
  const iconSize = iconSizeMap.get(size || "lg");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={iconSize}
      viewBox="0 -960 960 960"
      width={iconSize}
      fill={color || "#FFFFFF"}
    >
      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
    </svg>
  );
}
