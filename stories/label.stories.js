import "../styles/label.scss";

export default {
    title: "Label",
};

export const Wrapping = () => {
    const label = document.createElement("label");
    label.innerHTML = `A label can have text before <input type="text"/> or after its associated element when wrapping`;
    label.classList.add("fl-label");
    return label;
}
export const External = () => {
    const label = document.createElement("div");
    label.innerHTML = `<label class="fl-label" for="label-test">Labels can also exists separate from its associated element</label> <input type="text"/>`;
    return label;
}