
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

rented = books.map(books=>books.rented);

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
  lue=0
  for (i = 0; i < rented.length; i++)
  {
      if (rented[i]>lue){
        lue = rented[i];
      }
  }
  console.log(lue);
}

books_plus(rented);
function books_moins(rented){

  lue=rented[0]
  for (i = 1; i < rented.length; i++)
  {
      if (rented[i]<lue){
        lue = rented[i];
      }
  }
  console.log(lue);
}

books_moins(rented);

console.log(books.find(book => book.id === 873495));
