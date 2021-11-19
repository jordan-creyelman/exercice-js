
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

var rented = books.map(books=>books.rented);
 var title = books.map(books=>books.title)
function books_rented(rented){
  for (i = 0; i < rented.length; i++)
  {
      if (rented[i]==0){
        return console.log("")
      }
  }
  console.log("tous les livres ont été emprunté une fois");
}
books_rented(rented);

function books_plus(rented){
  var lue=0;
  var books = "";
  for (i = 0; i < rented.length; i++)
  {
      if (rented[i]>lue){
        lue = rented[i];
        books=title[i];
      }
  }
  console.log(books,lue)
}

books_plus(rented);
function books_moins(rented){
 var books=title[i];
 var lue=rented[0];
  for (i = 1; i < rented.length; i++)
  {
      if (rented[i]<lue){
        lue = rented[i];
        books=title[i];
      }
  }
  console.log(book,lue);
  
}

books_moins(rented);

console.log(books.find(book => book.id === 873495));
console.log("\nSupprime le livre avec l'ID: 133712\n");
console.log("Suppression de :")
console.log(books.find(book => book.id == 133712));
for (let i in books) {
if (books[i].id === 133712) {
  books.splice(i, 1);
}
}

//Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
console.log("\nTrie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)\n\n");
books.sort(function (a , b) 
{
  return a.title.localeCompare(b.title);
})
console.log(books);