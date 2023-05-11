function saveAndDownload() {
    var text = document.getElementById("text-box").value;
    var blob = new Blob([text], {type: "text/plain"});
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "saveNotes.txt";
    a.click();
    URL.revokeObjectURL(url);
  }