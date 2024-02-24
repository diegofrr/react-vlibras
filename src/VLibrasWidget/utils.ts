export function getAbbrevPosition(position: string): string {
  const map = {
    left: "L",
    right: "R",
    bottom: "B",
    top: "T",
    "bottom-left": "BL",
    "top-left": "TL",
    "bottom-right": "BR",
    "top-right": "TR",
  };

  return map[position as keyof typeof map] || position;
}
