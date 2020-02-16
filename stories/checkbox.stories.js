import "../styles/checkbox.scss";

export default {
    title: "Checkbox",
};

export const Default = () => {
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "fl-check";
    return check;
}
export const Primary = () => {
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "fl-check fl-primary";
    return check;
}
export const Secondary = () => {
    const check = document.createElement("input");
    check.type = "checkbox";
    check.className = "fl-check fl-secondary";
    return check;
}
export const Disabled = () => {
    const checks = document.createElement("div")
    const check1 = document.createElement("input");
    check1.type = "checkbox";
    check1.className = "fl-check";
    check1.disabled = true;
    check1.checked = true;
    const check2 = document.createElement("input");
    check2.type = "checkbox";
    check2.className = "fl-check fl-primary";
    check2.disabled = true;
    const check3 = document.createElement("input");
    check3.type = "checkbox";
    check3.className = "fl-check fl-secondary";
    check3.disabled = true;

    checks.append(check1);
    checks.append(check2);
    checks.append(check3);

    return checks;
}