document.addEventListener("DOMContentLoaded", function () {

    // Text input
    const input = document.getElementById("input");

    // Output div
    const output = document.getElementById("output");

    // Sliders
    const fontSize = document.getElementById("fontSize");
    const lineHeight = document.getElementById("lineHeight");
    const letterSpacing = document.getElementById("letterSpacing");

    // Slider value labels
    const fontSizeValue = document.getElementById("fontSizeValue");
    const lineHeightValue = document.getElementById("lineHeightValue");
    const letterSpacingValue = document.getElementById("letterSpacingValue");
    
    // Color pickers
    const textColor = document.getElementById("textColor");
    const backgroundColor = document.getElementById("backgroundColor");
    
    // Radio button groups
    const writingModes = document.querySelectorAll("input[name='mode']");
    const alignments = document.querySelectorAll("input[name='align']");

    let size = 36;

    output.style.fontSize = size + "px";

    // Live preview
    input.addEventListener("input", () => {
        output.textContent = input.value;
    });

    // Font size
    fontSize.addEventListener("input", () => {
        output.style.fontSize = fontSize.value + "px";
        fontSizeValue.textContent = fontSize.value + " px";
    });
    
    // Line spacing
    lineHeight.addEventListener("input", () => {
        output.style.lineHeight = lineHeight.value;
        lineHeightValue.textContent = lineHeight.value;
    });
    
    // Letter spacing
    letterSpacing.addEventListener("input", () => {
        output.style.letterSpacing = letterSpacing.value + "px";
        letterSpacingValue.textContent = letterSpacing.value + " px";
    });
    
    // Text color
    textColor.addEventListener("input", () => {
        output.style.color = textColor.value;
    });
    
    // Background color
    backgroundColor.addEventListener("input", () => {
        output.style.backgroundColor = backgroundColor.value;
    });
    
    // Writing mode
    writingModes.forEach(radio => {
        radio.addEventListener("change", () => {
    
            if (radio.value === "horizontal") {
                output.style.writingMode = "horizontal-tb";
                output.style.textOrientation = "mixed";
            } else {
                output.style.writingMode = "vertical-rl";
                output.style.textOrientation = "upright";
            }
    
        });
    });
    
    // Alignment
    alignments.forEach(radio => {
        radio.addEventListener("change", () => {
            output.style.textAlign = radio.value;
        });
    });
});
