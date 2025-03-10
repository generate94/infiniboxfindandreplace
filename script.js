function findAndReplace() {
    let editor = document.getElementById("editor");
    let findText = document.getElementById("findText").value;
    let replaceText = document.getElementById("replaceText").value;

    if (findText.trim() === "") return;
    
    let regex = new RegExp(findText, "g");
    editor.value = editor.value.replace(regex, replaceText);
}

// Close the portfolio popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
