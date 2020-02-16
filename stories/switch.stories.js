import "../styles/switch.scss";

export default {
    title: "Switch",
};

export const Default = () => {
    const theSwitch = document.createElement("input");
    theSwitch.type = "checkbox";
    theSwitch.className = "fl-switch";
    return theSwitch;
}
export const Disabled = () => {
    const theSwitch = document.createElement("input");
    theSwitch.type = "checkbox";
    theSwitch.className = "fl-switch";
    theSwitch.disabled = true;
    return theSwitch;
}