import "../styles/radio.scss";

export default {
    title: "Radio",
};

export const Default = () => {
    const radios = document.createElement("div");
    const radio1 = document.createElement("input");
    const radio2 = document.createElement("input");

    radio1.type = "radio";
    radio1.name = "radio";
    radio1.value = "1";
    radio1.className = "fl-radio";
    
    radio2.type = "radio";
    radio2.name = "radio";
    radio2.value = "2";
    radio2.className = "fl-radio";
    
    radios.append(radio1);
    radios.append(radio2);

    return radios;
}
export const Primary = () => {
    const radios = document.createElement("div");
    const radio1 = document.createElement("input");
    const radio2 = document.createElement("input");

    radio1.type = "radio";
    radio1.name = "radio";
    radio1.value = "1";
    radio1.className = "fl-radio fl-primary";
    radio2.type = "radio";
    radio2.name = "radio";
    radio2.value = "2";
    radio2.className = "fl-radio fl-primary";
    
    radios.append(radio1);
    radios.append(radio2);

    return radios;
}
export const Secondary = () => {
    const radios = document.createElement("div");
    const radio1 = document.createElement("input");
    const radio2 = document.createElement("input");

    radio1.type = "radio";
    radio1.name = "radio";
    radio1.value = "1";
    radio1.className = "fl-radio fl-secondary";
    
    radio2.type = "radio";
    radio2.name = "radio";
    radio2.value = "2";
    radio2.className = "fl-radio fl-secondary";
    
    radios.append(radio1);
    radios.append(radio2);

    return radios;
}

export const Disabled = () => {
    const radios = document.createElement("div");
    const radio1 = document.createElement("input");
    const radio2 = document.createElement("input");

    radio1.type = "radio";
    radio1.name = "radio";
    radio1.value = "1";
    radio1.className = "fl-radio fl-secondary";
    radio1.disabled = true;
    radio1.checked = true;
    
    radio2.type = "radio";
    radio2.name = "radio";
    radio2.value = "2";
    radio2.className = "fl-radio fl-secondary";
    radio2.disabled = true;
    
    radios.append(radio1);
    radios.append(radio2);

    return radios;
}