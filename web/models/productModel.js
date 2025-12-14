const products = [
  { id: 1, name: "Laptop", price: 60000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 }
];

module.exports = {
  getAll: () => products,
  getById: (id) => products.find(p => p.id === id)
};
