function findAndReplace() {
    let editor = document.getElementById("editor");
    let findText = document.getElementById("findText").value;
    let replaceText = document.getElementById("replaceText").value;

    if (findText.trim() === "") return;

    // Escape special characters for regex
    let escapedFindText = findText.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    
    // Create the regex
    let regex = new RegExp(escapedFindText, "g");

    // Perform the replace
    editor.value = editor.value.replace(regex, replaceText);
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
