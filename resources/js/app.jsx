import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@/Components/theme-provider";

const appName = import.meta.env.VITE_APP_NAME || "Laravel";

const getCssVariable = (variableName) => {
    let color = getComputedStyle(document.documentElement)
        .getPropertyValue(variableName)
        .trim();

    const colorArray = color.split(" ");
    return hslToHex(
        Number(colorArray[0].replace("%", "")),
        Number(colorArray[1].replace("%", "")),
        Number(colorArray[2].replace("%", ""))
    );
};
function hslToHex(h, s, l) {
    l /= 100;
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color)
            .toString(16)
            .padStart(2, "0"); // convert to Hex and prefix "0" if needed
    };

    return `#${f(0)}${f(8)}${f(4)}`;
}
const progressColor = getCssVariable("--primary");

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <App {...props} />
            </ThemeProvider>
        );
    },
    progress: {
        color: progressColor,
    },
});
