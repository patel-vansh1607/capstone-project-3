import "../styles/Products.css";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "Description of Product 1",
      price: "$10.00",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Product 2",
      description: "Description of Product 2",
      price: "$20.00",
      imageUrl: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Product 3",
      description: "Description of Product 3",
      price: "$30.00",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="products-container">
      {products.map(product => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
}

export default Products;
