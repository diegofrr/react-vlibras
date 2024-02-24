import { useEffect } from "react";

import type { VLibrasWidgetParams } from "./types";
import { getAbbrevPosition } from "./utils";

import { SCRIPT_URL, DEV_SCRIPT_URL } from "./constants";

export default function VLibras(params: VLibrasWidgetParams) {
  const isDevelopment = params.isDevelopment !== false;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = isDevelopment ? DEV_SCRIPT_URL : SCRIPT_URL;
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      new window.VLibras.Widget({
        ...params,
        position: getAbbrevPosition(params.position || "right"),
      });

      (window as any).onload();
    };
    document.head.appendChild(script);
  }, []);

  return (
    <>
      {/* @ts-ignore */}
      <div vw="" className="enabled">
        <div vw-access-button="" className="active"></div>
        <div vw-plugin-wrapper="">
          <div className="vw-plugin-top-wrapper"></div>
        </div>
      </div>
    </>
  );
}
