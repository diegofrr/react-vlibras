import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useEffect } from 'react';

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

const SCRIPT_URL = "https://www.vlibras.gov.br/app/vlibras-plugin.js";
const DEV_SCRIPT_URL = "https://www-dth.vlibras.gov.br/app/vlibras-plugin.js";

function VLibras(params) {
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
            window.onload();
        };
        document.head.appendChild(script);
    }, []);
    return (jsx(Fragment, { children: jsxs("div", { vw: "", className: "enabled", children: [jsx("div", { "vw-access-button": "", className: "active" }), jsx("div", { "vw-plugin-wrapper": "", children: jsx("div", { className: "vw-plugin-top-wrapper" }) })] }) }));
}

export { VLibras as default };
