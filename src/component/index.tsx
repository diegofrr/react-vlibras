import { useEffect } from "react";

import type { VLibrasWidgetParams } from "./types";
import { getAbbrevPosition } from "./utils";

import { SCRIPT_URL } from "./constants";

export default function VLibras(params: VLibrasWidgetParams) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
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
