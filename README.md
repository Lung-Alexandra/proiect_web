# proiect_web

#READ
/invent.html -> afiseaza interfata si inveniile retiute pe server

#POST
/invent.html/add -> adauga o inventie dupa request body 
-> returneaza noul obiect

#PUT
/invent.html/update_invent/:id -> update la o inventie dupa id(numarul afisat in stanga sus in fiecare caseta de inventii) cu date din request body (folosinf field-urile afisate si pt ruta de add putand sa modificam simultan mai mute campuri - daca nu dorim modificare nu completam campul)
-> returneaza vectorul cu toate inventiile inclusiv inventia modificata 

#DELETE
/invent.html/delete_invent/:id -> sterge un produs dupa o inventie dupa id(numarul afisat in stanga sus in fiecare caseta de inventii)
-> returneaza noul vector cu toate inventiile