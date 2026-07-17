const input = document.getElementById("input");
const output = document.getElementById("output");

let size = 36;

output.style.fontSize = size + "px";

const modes = [
    "horizontal-tb",
    "vertical-rl",
    "vertical-lr"
];

let current = 0;

input.addEventListener(input, () => {
    output.textContent = input.value;
});

document.getElementById("larger").onclick = () => {
    size += 2;
    output.style.fontSize = size + "px";
};

document.getElementById("smaller").onclick = () => {
    size = Math.max(8, size - 2);
    output.style.fontSize = size + "px";
};

document.getElementById("nextMode").onclick = () => {
    current = (current + 1) % modes.length;
    output.style.writingMode = modes[current];
};
