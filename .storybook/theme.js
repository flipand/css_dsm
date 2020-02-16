import { create } from "@storybook/theming/create";

export default create({
    base: "dark",

    colorPrimary: "rgba(255,255,255,1)",
    colorSecondary: "rgba(0,95,185,1)",

    // UI
    appBg: "rgba(38,38,38,1)",
    appContentBg: "rgba(40,42,54,1)",
    appBorderColor: "rgba(0,0,0,1)",
    appBorderRadius: 4,

    // Typography
    fontBase: '"courier new",courier',
    fontCode: "monospace",

    // Text colors
    textColor: "rgba(192,192,192,1)",
    textInverseColor: "rgba(255,255,255,.9)",

    // Toolbar default and active colors
    barTextColor: "rgba(192,192,192,1)",
    barSelectedColor: "rgba(0,0,0,1)",
    barBg: "rgba(38,38,38,1)",

    // Form colors
    inputBg: "rgb(255,255,255,1)",
    inputBorder: "rgba(192,192,192,1)",
    inputTextColor: "rgb(255,255,255,1)",
    inputBorderRadius: 4,

    brandTitle: "flip.and DSM",
    brandUrl: "flipand.one",
    brandImage: "",
});
