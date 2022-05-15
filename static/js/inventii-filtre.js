const anAparitie = document.getElementById("an-aparitie");
const elements = document.querySelectorAll("div[id]");
anAparitie.addEventListener("change", function () {
    let valuec = parseInt(anAparitie.value);
    if(isNaN(valuec))
        valuec="";
    [...elements].forEach((element) => {
        if (valuec === "") {
            element.style.display = "block";
        } else {
        const an = Math.floor(parseInt(element.dataset.an)/100);
        if (an != valuec) {
            element.style.display = "none";
        } else {
            element.style.display = "block";
        }
        }
    });
});