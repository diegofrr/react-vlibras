import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';

const SCRIPT_URL = "https://www.vlibras.gov.br/app/vlibras-plugin.js";

function getAbbrevPosition(position) {
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
    return map[position] || position;
}

function VLibras(params) {
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
            window.onload();
        };
        document.head.appendChild(script);
        return () => {
            window.onload = null;
        };
    }, []);
    return (jsx(Fragment, { children: jsxs("div", { vw: "", className: "enabled z-max", children: [jsx("div", { "vw-access-button": "", className: "active" }), jsx("div", { "vw-plugin-wrapper": "", children: jsx("div", { className: "vw-plugin-top-wrapper" }) })] }) }));
}

export { VLibras as default };
