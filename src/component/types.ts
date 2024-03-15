export type VLibrasWidgetParams = {
  rootPath?: string;
  avatar?: "icaro" | "hosana" | "guga" | "random";
  opacity?: number;
  safeInit?: boolean;
  personalization?: string;
  position?:
    | "left"
    | "right"
    | "bottom"
    | "top"
    | "bottom-left"
    | "top-left"
    | "bottom-right"
    | "top-right";
};
