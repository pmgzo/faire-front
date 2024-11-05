export interface IconProps {
  color?: string;
  size?: IconSize;
}

export type IconSize = "sm" | "md" | "lg";

export const iconSizeMap = new Map<IconSize, string>([
  ["sm", "16px"],
  ["md", "20px"],
  ["lg", "24px"],
]);
