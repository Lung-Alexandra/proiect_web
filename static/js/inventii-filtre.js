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
/*
for(let i=1;i<elements.length;++i)
{
  let invent = {
  "nr":elements[i].getElementsByTagName("span")[0].innerText,
 "id":elements[i].id,
  "nume_inventie":elements[i].getElementsByTagName("h2")[0].innerText,
   "nume_inventator":elements[i].getElementsByTagName("p")[0].innerText,
 "invent": elements[i].getElementsByTagName("p").length == 2  ? elements[i].getElementsByTagName("p")[1].innerText : elements[i].getElementsByTagName("p")[0].innerText,
 "img":elements[i].getElementsByTagName("img")[0].src.slice(21,elements[i].getElementsByTagName("img")[0].src.length+1),
  "descriere":elements[i].getElementsByTagName("span")[1].innerText
 }
  console.log(JSON.stringify(invent));
}
*/
//search bar
/*const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      const body = card.querySelector("[data-body]")
      header.textContent = user.name
      body.textContent = user.email
      userCardContainer.append(card)
      return { name: user.name, email: user.email, element: card }
    })
  })*/