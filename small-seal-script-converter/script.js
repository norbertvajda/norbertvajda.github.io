document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    const fontSizeSlider = document.getElementById("size");

    let size = 36;

    output.style.fontSize = size + "px";
    
    input.addEventListener("input", () => {
        output.textContent = input.value;
    });

    fontSizeSlider.addEventListener("input", () => {
        output.style.fontSize = slider.value + "px";
    });
    
    document.getElementById("larger").addEventListener("click", () => {
        size += 2;
        output.style.fontSize = size + "px";
    });
    
    document.getElementById("smaller").addEventListener("click", () => {
        size = Math.max(8, size - 2);
        output.style.fontSize = size + "px";
    });
    
    document.getElementById("horizontal").addEventListener("click", () => {
    
        output.style.writingMode = "horizontal-tb";
        output.style.textOrientation = "mixed";
    
    });
    
    document.getElementById("vertical").addEventListener("click", () => {
    
        output.style.writingMode = "vertical-rl";
        output.style.textOrientation = "upright";
    
    });
});
