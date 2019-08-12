function clickListener() {
    document.getElementById("rengar").addEventListener("click", render())
}

function render() {
    document.getElementById("title").src = "assets/rengar.png"
    alert("You've been deleted")
}