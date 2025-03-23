// Display Reference
let display = document.getElementById("display");

// Append Value to Display
function appendValue(value) {
    display.value += value;
    vibrate();
}

// Clear Display
function clearDisplay() {
    display.value = "";
}

// Remove Last Character
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate Result
function calculate() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
        setTimeout(() => clearDisplay(), 1500);
    }
}

// Keyboard Support
document.addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9" || "+-*/.%".includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (event.key === "Backspace") {
        backspace();
    } else if (event.key === "Escape") {
        clearDisplay();
    }
});

// Vibration Feedback
function vibrate() {
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});