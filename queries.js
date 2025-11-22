use plp_bookstore;

// Task 2: Basic CRUD
print("=== Books in Fiction genre ===");
db.books.find({ genre: "Fiction" }).pretty();

print("=== Books published after 2010 ===");
db.books.find({ published_year: { $gt: 2010 } }).pretty();

print("=== Books by Ngũgĩ wa Thiong'o ===");
db.books.find({ author: "Ngũgĩ wa Thiong'o" }).pretty();

print("=== Update price of 'Born a Crime' ===");
db.books.updateOne(
  { title: "Born a Crime" },
  { $set: { price: 2999 } }
);

print("=== Delete 'Dust' ===");
db.books.deleteOne({ title: "Petals of Blood" });

// Task 3: Advanced Queries
print("=== In stock AND after 2010 ===");
db.books.find({ in_stock: true, published_year: { $gt: 2010 } }, 
  { title: 1, author: 1, price: 1, _id: 0 }).pretty();

print("=== Sort by price ASC ===");
db.books.find().sort({ price: 1 }).pretty();

print("=== Sort by price DESC ===");
db.books.find().sort({ price: -1 }).pretty();

print("=== Pagination: Page 1 (5 books) ===");
db.books.find().limit(5).pretty();

print("=== Pagination: Page 2 ===");
db.books.find().skip(5).limit(5).pretty();

// Task 4: Aggregation
print("=== Average price by genre ===");
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

print("=== Author with most books ===");
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

print("=== Books per decade ===");
db.books.aggregate([
  { $bucket: {
      groupBy: "$published_year",
      boundaries: [1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2030],
      default: "Other",
      output: { count: { $sum: 1 } }
  }}
]);

// Task 5: Indexes
db.books.createIndex({ title: 1 });
db.books.createIndex({ author: 1, published_year: 1 });

print("=== Explain without index ===");
printjson(db.books.find({ title: "Becoming" }).explain("executionStats"));

print("=== Explain with index ===");
printjson(db.books.find({ title: "Becoming" }).hint({ title: 1 }).explain("executionStats"));
