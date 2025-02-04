function transformText() {
    let text = document.getElementById("inputText").value;
    let transformedText = text.toUpperCase().split("").reverse().join("");
    document.getElementById("result").innerText = transformedText;
}
