//use plp_bookstore database;

db.books.insertMany([
  { title: "Things Fall Apart", author: "Chinua Achebe", genre: "Fiction", published_year: 1958, price: 1200, in_stock: true, pages: 209, publisher: "Heinemann" },
  { title: "Born a Crime", author: "Trevor Noah", genre: "Biography", published_year: 2016, price: 2500, in_stock: true, pages: 304, publisher: "Spiegel & Grau" },
  { title: "The River Between", author: "Ngũgĩ wa Thiong'o", genre: "Fiction", published_year: 1965, price: 950, in_stock: true, pages: 152, publisher: "Heinemann" },
  { title: "Decolonising the Mind", author: "Ngũgĩ wa Thiong'o", genre: "Non-fiction", published_year: 1986, price: 1800, in_stock: true, pages: 176, publisher: "James Currey" },
  { title: "Dust", author: "Petals of Blood", author: "Ngũgĩ wa Thiong'o", genre: "Fiction", published_year: 1977, price: 2200, in_stock: false, pages: 432, publisher: "Heinemann" },
  { title: "Becoming", author: "Michelle Obama", genre: "Biography", published_year: 2018, price: 3200, in_stock: true, pages: 426, publisher: "Crown" },
  { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", genre: "Finance", published_year: 1997, price: 1500, in_stock: true, pages: 336, publisher: "Warner Books" },
  { title: "Atomic Habits", author: "James Clear", genre: "Self-help", published_year: 2018, price: 2800, in_stock: true, pages: 320, publisher: "Avery" },
  { title: "The Psychology of Money", author: "Morgan Housel", genre: "Finance", published_year: 2020, price: 2600, in_stock: true, pages: 256, publisher: "Harriman House" },
  { title: "Half of a Yellow Sun", author: "Chimamanda Ngozi Adichie", genre: "Fiction", published_year: 2006, price: 2100, in_stock: true, pages: 543, publisher: "Farafina" },
  { title: "Americanah", author: "Chimamanda Ngozi Adichie", genre: "Fiction", published_year: 2013, price: 2400, in_stock: true, pages: 588, publisher: "Farafina" }
]);
